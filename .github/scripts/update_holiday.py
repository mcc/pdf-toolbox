#!/usr/bin/env python3
"""Merge Hong Kong public holiday data from 1823.gov.hk into holiday.js.

Fetches the latest iCalendar JSON for the requested language, merges new /
updated events into the existing ``localHolidays`` object in
``public/tools/js/holiday.js`` (keyed by ``uid`` to preserve history), and
bumps the ``?YYYYMMDD`` cache-bust query string on the ``holiday.js``
``<script>`` tag in ``public/tools/other-working-days.html`` so browsers
re-fetch the updated file.
"""

import datetime
import json
import re
import sys
from pathlib import Path

import requests


URL = "https://www.1823.gov.hk/common/ical/tc.json"
HOLIDAY_JS = Path("public/tools/js/holiday.js")
WORKING_DAYS_HTML = Path("public/tools/other-working-days.html")
CACHE_BUST_PATTERN = re.compile(
    r'(<script src="js/holiday\.js\?)\d{8}("></script>)'
)


def fetch_json(url, timeout=30, max_retries=3):
    """Fetch and parse JSON from a URL with a small retry loop.

    The 1823 endpoint serves the file as ``application/json`` with a UTF-8
    BOM, so we decode the body with ``utf-8-sig`` (which strips the BOM)
    instead of relying on ``requests``' built-in ``resp.json()``.
    """
    last_err = None
    for attempt in range(1, max_retries + 1):
        try:
            resp = requests.get(url, timeout=timeout)
            resp.raise_for_status()
            return json.loads(resp.content.decode("utf-8-sig"))
        except (requests.RequestException, ValueError) as e:
            last_err = e
            print(
                f"Attempt {attempt}/{max_retries} failed: {e}", file=sys.stderr
            )
    raise RuntimeError(
        f"Failed to fetch {url} after {max_retries} attempts: {last_err}"
    )


def extract_local_holidays(content):
    """Return the ``localHolidays`` object literal as a JSON-compatible string.

    Uses brace-matching that respects string literals and escapes so the
    surrounding ``const localHolidays = ...;`` wrapper is preserved verbatim.
    """
    marker = "const localHolidays = "
    start = content.index(marker) + len(marker)
    depth = 0
    in_string = False
    string_char = None
    i = start
    while i < len(content):
        c = content[i]
        if in_string:
            if c == "\\":
                i += 2
                continue
            if c == string_char:
                in_string = False
            i += 1
            continue
        if c in ('"', "'"):
            in_string = True
            string_char = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return content[start:i + 1], i + 1
        i += 1
    raise ValueError("Could not find end of localHolidays object")


def load_existing(path):
    """Load and return the existing localHolidays dict, or None if absent."""
    if not path.exists():
        return None
    obj_text, _ = extract_local_holidays(path.read_text(encoding="utf-8"))
    return json.loads(obj_text)


def merge_holidays(local, url_data):
    """Merge URL events into localHolidays by uid.

    The vcalendar-level metadata (prodid, version, calscale, x-wr-*, ...) is
    preserved from ``local`` so the file is stable across runs. Events are
    keyed by ``uid``; matching entries are replaced with the URL copy and new
    entries are appended. Historical events no longer present in the URL
    response are retained. The resulting vevent list is sorted by dtstart.
    """
    url_events = url_data["vcalendar"][0]["vevent"]
    url_by_uid = {evt["uid"]: evt for evt in url_events}

    if local is None:
        # No local file yet — seed it from the URL response.
        return {
            "vcalendar": [
                {
                    "prodid": url_data["vcalendar"][0].get(
                        "prodid",
                        "-//1823 Contact Centre, HKSAR Government//Hong Kong Public Holidays//EN",
                    ),
                    "version": url_data["vcalendar"][0].get("version", "2.0"),
                    "calscale": url_data["vcalendar"][0].get("calscale", "GREGORIAN"),
                    "x-wr-timezone": url_data["vcalendar"][0].get(
                        "x-wr-timezone", "Asia/Hong_Kong"
                    ),
                    "x-wr-calname": url_data["vcalendar"][0].get("x-wr-calname", ""),
                    "x-wr-caldesc": url_data["vcalendar"][0].get("x-wr-caldesc", ""),
                    "vevent": sorted(
                        url_by_uid.values(), key=lambda e: e["dtstart"][0]
                    ),
                }
            ]
        }

    merged = json.loads(json.dumps(local))  # deep copy via JSON round-trip
    existing_events = merged["vcalendar"][0].get("vevent", [])
    by_uid = {evt["uid"]: evt for evt in existing_events}
    by_uid.update(url_by_uid)
    merged["vcalendar"][0]["vevent"] = sorted(
        by_uid.values(), key=lambda e: e["dtstart"][0]
    )
    return merged


def write_holiday_js(path, data):
    """Write ``holiday.js`` preserving the ``// header`` + ``const`` wrapper."""
    body = json.dumps(data, indent="\t", ensure_ascii=False)
    path.write_text(
        "// holiday.js\nconst localHolidays = " + body + ";\n",
        encoding="utf-8",
    )


def bump_cache_bust(path, new_date):
    """Update the ``?YYYYMMDD`` cache-bust on the holiday.js script tag."""
    text = path.read_text(encoding="utf-8")
    new_text, count = CACHE_BUST_PATTERN.subn(rf"\g<1>{new_date}\g<2>", text)
    if count == 0:
        print(
            f"Warning: no <script src=\"js/holiday.js?YYYYMMDD\"> tag found in {path}",
            file=sys.stderr,
        )
        return False
    path.write_text(new_text, encoding="utf-8")
    return True


def main():
    print(f"Fetching {URL} ...")
    url_data = fetch_json(URL)

    local = load_existing(HOLIDAY_JS)
    merged = merge_holidays(local, url_data)

    if local == merged:
        print("No changes; holiday.js is already up to date.")
        return 0

    print("Writing public/tools/js/holiday.js ...")
    write_holiday_js(HOLIDAY_JS, merged)

    today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%d")
    if bump_cache_bust(WORKING_DAYS_HTML, today):
        print(f"Bumped holiday.js cache-bust to {today} in other-working-days.html")

    return 0


if __name__ == "__main__":
    sys.exit(main())
