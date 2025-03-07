// holiday.js
const tbcHolidays = {

		"vcalendar": [{

			"prodid": "-//1823 Call Centre, HKSAR Government//Hong Kong Public Holidays//EN",

			"version": "2.0",

			"calscale": "GREGORIAN",

			"x-wr-timezone": "Asia/Hong_Kong",

			"x-wr-calname": "香港公眾假期",

			"x-wr-caldesc": "香港公眾假期",

  "vevent": [
    // 2025
    {"dtstart": ["20250101", {"value": "DATE"}], "dtend": ["20250102", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250101@1823.gov.hk", "summary": "[TBC] 一月一日"},
    {"dtstart": ["20250206", {"value": "DATE"}], "dtend": ["20250207", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250206@1823.gov.hk", "summary": "[TBC] 農曆年初一"},
    {"dtstart": ["20250207", {"value": "DATE"}], "dtend": ["20250208", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250207@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20250208", {"value": "DATE"}], "dtend": ["20250209", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250208@1823.gov.hk", "summary": "[TBC] 農曆年初三"},
    {"dtstart": ["20250404", {"value": "DATE"}], "dtend": ["20250405", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250404@1823.gov.hk", "summary": "[TBC] 清明節"},
    {"dtstart": ["20250418", {"value": "DATE"}], "dtend": ["20250419", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250418@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20250419", {"value": "DATE"}], "dtend": ["20250420", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250419@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, // Saturday, no compensation
    {"dtstart": ["20250421", {"value": "DATE"}], "dtend": ["20250422", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250421@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20250501", {"value": "DATE"}], "dtend": ["20250502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250501@1823.gov.hk", "summary": "[TBC] 勞動節"},
    {"dtstart": ["20250527", {"value": "DATE"}], "dtend": ["20250528", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250527@1823.gov.hk", "summary": "[TBC] 佛誕"},
    {"dtstart": ["20250627", {"value": "DATE"}], "dtend": ["20250628", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250627@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20250701", {"value": "DATE"}], "dtend": ["20250702", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250701@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日"},
    {"dtstart": ["20250925", {"value": "DATE"}], "dtend": ["20250926", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20250925@1823.gov.hk", "summary": "[TBC] 中秋節翌日"},
    {"dtstart": ["20251001", {"value": "DATE"}], "dtend": ["20251002", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20251001@1823.gov.hk", "summary": "[TBC] 國慶日"},
    {"dtstart": ["20251020", {"value": "DATE"}], "dtend": ["20251021", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20251020@1823.gov.hk", "summary": "[TBC] 重陽節"},
    {"dtstart": ["20251225", {"value": "DATE"}], "dtend": ["20251226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20251225@1823.gov.hk", "summary": "[TBC] 聖誕節"},
    {"dtstart": ["20251226", {"value": "DATE"}], "dtend": ["20251227", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20251226@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日"},

    // 2026
    {"dtstart": ["20260101", {"value": "DATE"}], "dtend": ["20260102", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260101@1823.gov.hk", "summary": "[TBC] 一月一日"},
    {"dtstart": ["20260126", {"value": "DATE"}], "dtend": ["20260127", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260126@1823.gov.hk", "summary": "[TBC] 農曆年初一 (星期日補假)"}, // Sunday, Jan 25 → Monday, Jan 26
    {"dtstart": ["20260127", {"value": "DATE"}], "dtend": ["20260128", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260127@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20260128", {"value": "DATE"}], "dtend": ["20260129", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260128@1823.gov.hk", "summary": "[TBC] 農曆年初三"},
    {"dtstart": ["20260403", {"value": "DATE"}], "dtend": ["20260404", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260403@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20260404", {"value": "DATE"}], "dtend": ["20260405", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260404@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, // Overlaps with Ching Ming, Saturday
    {"dtstart": ["20260406", {"value": "DATE"}], "dtend": ["20260407", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260406@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20260407", {"value": "DATE"}], "dtend": ["20260408", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260407@1823.gov.hk", "summary": "[TBC] 清明節 (重疊補假)"}, // Overlap from Apr 4 → Tuesday, Apr 7
    {"dtstart": ["20260501", {"value": "DATE"}], "dtend": ["20260502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260501@1823.gov.hk", "summary": "[TBC] 勞動節"},
    {"dtstart": ["20260515", {"value": "DATE"}], "dtend": ["20260516", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260515@1823.gov.hk", "summary": "[TBC] 佛誕"},
    {"dtstart": ["20260616", {"value": "DATE"}], "dtend": ["20260617", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260616@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20260701", {"value": "DATE"}], "dtend": ["20260702", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260701@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日"},
    {"dtstart": ["20260915", {"value": "DATE"}], "dtend": ["20260916", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260915@1823.gov.hk", "summary": "[TBC] 中秋節翌日"},
    {"dtstart": ["20261001", {"value": "DATE"}], "dtend": ["20261002", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261001@1823.gov.hk", "summary": "[TBC] 國慶日"},
    {"dtstart": ["20261009", {"value": "DATE"}], "dtend": ["20261010", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261009@1823.gov.hk", "summary": "[TBC] 重陽節"},
    {"dtstart": ["20261225", {"value": "DATE"}], "dtend": ["20261226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261225@1823.gov.hk", "summary": "[TBC] 聖誕節"},
    {"dtstart": ["20261228", {"value": "DATE"}], "dtend": ["20261229", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261228@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日 (星期日補假)"}, // Sunday, Dec 27 → Monday, Dec 28

    // 2027
    {"dtstart": ["20270101", {"value": "DATE"}], "dtend": ["20270102", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270101@1823.gov.hk", "summary": "[TBC] 一月一日"},
    {"dtstart": ["20270212", {"value": "DATE"}], "dtend": ["20270213", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270212@1823.gov.hk", "summary": "[TBC] 農曆年初一"},
    {"dtstart": ["20270213", {"value": "DATE"}], "dtend": ["20270214", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270213@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20270215", {"value": "DATE"}], "dtend": ["20270216", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270215@1823.gov.hk", "summary": "[TBC] 農曆年初三 (星期日補假)"}, // Sunday, Feb 14 → Monday, Feb 15
    {"dtstart": ["20270405", {"value": "DATE"}], "dtend": ["20270406", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270405@1823.gov.hk", "summary": "[TBC] 清明節"},
    {"dtstart": ["20270326", {"value": "DATE"}], "dtend": ["20270327", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270326@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20270327", {"value": "DATE"}], "dtend": ["20270328", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270327@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, // Saturday, no compensation
    {"dtstart": ["20270329", {"value": "DATE"}], "dtend": ["20270330", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270329@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20270501", {"value": "DATE"}], "dtend": ["20270502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270501@1823.gov.hk", "summary": "[TBC] 勞動節"}, // Saturday, no compensation
    {"dtstart": ["20270505", {"value": "DATE"}], "dtend": ["20270506", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270505@1823.gov.hk", "summary": "[TBC] 佛誕"},
    {"dtstart": ["20270607", {"value": "DATE"}], "dtend": ["20270608", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270607@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20270701", {"value": "DATE"}], "dtend": ["20270702", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20270701@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日"},
    {"dtstart": ["20271004", {"value": "DATE"}], "dtend": ["20271005", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20271004@1823.gov.hk", "summary": "[TBC] 中秋節翌日 (星期日補假)"}, // Sunday, Oct 3 → Monday, Oct 4
    {"dtstart": ["20271001", {"value": "DATE"}], "dtend": ["20271002", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20271001@1823.gov.hk", "summary": "[TBC] 國慶日"},
    {"dtstart": ["20271026", {"value": "DATE"}], "dtend": ["20271027", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20271026@1823.gov.hk", "summary": "[TBC] 重陽節"},
    {"dtstart": ["20271225", {"value": "DATE"}], "dtend": ["20271226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20271225@1823.gov.hk", "summary": "[TBC] 聖誕節"}, // Saturday, no compensation
    {"dtstart": ["20271227", {"value": "DATE"}], "dtend": ["20271228", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20271227@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日 (星期日補假)"}, // Sunday, Dec 26 → Monday, Dec 27

    // 2028 (Leap Year)
    {"dtstart": ["20280101", {"value": "DATE"}], "dtend": ["20280102", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280101@1823.gov.hk", "summary": "[TBC] 一月一日"}, // Saturday, no compensation
    {"dtstart": ["20280202", {"value": "DATE"}], "dtend": ["20280203", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280202@1823.gov.hk", "summary": "[TBC] 農曆年初一"},
    {"dtstart": ["20280203", {"value": "DATE"}], "dtend": ["20280204", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280203@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20280204", {"value": "DATE"}], "dtend": ["20280205", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280204@1823.gov.hk", "summary": "[TBC] 農曆年初三"},
    {"dtstart": ["20280404", {"value": "DATE"}], "dtend": ["20280405", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280404@1823.gov.hk", "summary": "[TBC] 清明節"},
    {"dtstart": ["20280414", {"value": "DATE"}], "dtend": ["20280415", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280414@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20280415", {"value": "DATE"}], "dtend": ["20280416", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280415@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, // Saturday, no compensation
    {"dtstart": ["20280417", {"value": "DATE"}], "dtend": ["20280418", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280417@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20280501", {"value": "DATE"}], "dtend": ["20280502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280501@1823.gov.hk", "summary": "[TBC] 勞動節"},
    {"dtstart": ["20280522", {"value": "DATE"}], "dtend": ["20280523", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280522@1823.gov.hk", "summary": "[TBC] 佛誕"},
    {"dtstart": ["20280623", {"value": "DATE"}], "dtend": ["20280624", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280623@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20280701", {"value": "DATE"}], "dtend": ["20280702", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280701@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日"}, // Saturday, no compensation
    {"dtstart": ["20280922", {"value": "DATE"}], "dtend": ["20280923", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20280922@1823.gov.hk", "summary": "[TBC] 中秋節翌日"},
    {"dtstart": ["20281002", {"value": "DATE"}], "dtend": ["20281003", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20281002@1823.gov.hk", "summary": "[TBC] 國慶日 (星期日補假)"}, // Sunday, Oct 1 → Monday, Oct 2
    {"dtstart": ["20281017", {"value": "DATE"}], "dtend": ["20281018", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20281017@1823.gov.hk", "summary": "[TBC] 重陽節"},
    {"dtstart": ["20281225", {"value": "DATE"}], "dtend": ["20281226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20281225@1823.gov.hk", "summary": "[TBC] 聖誕節"},
    {"dtstart": ["20281226", {"value": "DATE"}], "dtend": ["20281227", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20281226@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日"},

    // 2029
    {"dtstart": ["20290101", {"value": "DATE"}], "dtend": ["20290102", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290101@1823.gov.hk", "summary": "[TBC] 一月一日"},
    {"dtstart": ["20290122", {"value": "DATE"}], "dtend": ["20290123", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290122@1823.gov.hk", "summary": "[TBC] 農曆年初一"},
    {"dtstart": ["20290123", {"value": "DATE"}], "dtend": ["20290124", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290123@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20290124", {"value": "DATE"}], "dtend": ["20290125", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290124@1823.gov.hk", "summary": "[TBC] 農曆年初三"},
    {"dtstart": ["20290404", {"value": "DATE"}], "dtend": ["20290405", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290404@1823.gov.hk", "summary": "[TBC] 清明節"},
    {"dtstart": ["20290330", {"value": "DATE"}], "dtend": ["20290331", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290330@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20290331", {"value": "DATE"}], "dtend": ["20290401", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290331@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, // Saturday, no compensation
    {"dtstart": ["20290402", {"value": "DATE"}], "dtend": ["20290403", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290402@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20290501", {"value": "DATE"}], "dtend": ["20290502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290501@1823.gov.hk", "summary": "[TBC] 勞動節"},
    {"dtstart": ["20290515", {"value": "DATE"}], "dtend": ["20290516", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290515@1823.gov.hk", "summary": "[TBC] 佛誕"},
    {"dtstart": ["20290613", {"value": "DATE"}], "dtend": ["20290614", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290613@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20290702", {"value": "DATE"}], "dtend": ["20290703", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290702@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日 (星期日補假)"}, // Sunday, Jul 1 → Monday, Jul 2
    {"dtstart": ["20290912", {"value": "DATE"}], "dtend": ["20290913", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20290912@1823.gov.hk", "summary": "[TBC] 中秋節翌日"},
    {"dtstart": ["20291001", {"value": "DATE"}], "dtend": ["20291002", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20291001@1823.gov.hk", "summary": "[TBC] 國慶日"},
    {"dtstart": ["20291008", {"value": "DATE"}], "dtend": ["20291009", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20291008@1823.gov.hk", "summary": "[TBC] 重陽節"},
    {"dtstart": ["20291225", {"value": "DATE"}], "dtend": ["20291226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20291225@1823.gov.hk", "summary": "[TBC] 聖誕節"},
    {"dtstart": ["20291226", {"value": "DATE"}], "dtend": ["20291227", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20291226@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日"}
  ]
}]

}

;