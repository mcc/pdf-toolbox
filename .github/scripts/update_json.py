import sys
import json
import requests
from pathlib import Path

def load_json_from_url(url):
    """Fetch and parse JSON from a URL."""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except (requests.RequestException, ValueError) as e:
        print(f"Error fetching JSON from URL: {e}")
        sys.exit(1)

def load_json_from_file(file_path):
    """Load JSON from a file."""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading JSON file: {e}")
        sys.exit(1)

def save_json_to_file(data, file_path):
    """Save JSON to a file with consistent formatting."""
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2, sort_keys=True)

def main():
    if len(sys.argv) != 3:
        print("Usage: python update_json.py <url> <file_path>")
        sys.exit(1)

    url = sys.argv[1]
    file_path = sys.argv[2]

    # Load JSON from URL and file
    url_json = load_json_from_url(url)
    file_json = load_json_from_file(file_path)

    # Compare JSON content
    if url_json != file_json:
        print("JSON files differ, updating repository file...")
        save_json_to_file(url_json, file_path)
    else:
        print("JSON files are identical, no update needed.")

if __name__ == "__main__":
    main()
