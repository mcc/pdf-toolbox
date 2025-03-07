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
    {"dtstart": ["20260217", {"value": "DATE"}], "dtend": ["20260218", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260126@1823.gov.hk", "summary": "[TBC] 農曆年初一"}, 
    {"dtstart": ["20260218", {"value": "DATE"}], "dtend": ["20260219", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260127@1823.gov.hk", "summary": "[TBC] 農曆年初二"},
    {"dtstart": ["20260219", {"value": "DATE"}], "dtend": ["20260220", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260128@1823.gov.hk", "summary": "[TBC] 農曆年初三"},
    {"dtstart": ["20260403", {"value": "DATE"}], "dtend": ["20260404", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260403@1823.gov.hk", "summary": "[TBC] 耶穌受難節"},
    {"dtstart": ["20260404", {"value": "DATE"}], "dtend": ["20260405", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260404@1823.gov.hk", "summary": "[TBC] 耶穌受難節翌日"}, 
    {"dtstart": ["20260406", {"value": "DATE"}], "dtend": ["20260407", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260406@1823.gov.hk", "summary": "[TBC] 復活節星期一"},
    {"dtstart": ["20260407", {"value": "DATE"}], "dtend": ["20260408", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260407@1823.gov.hk", "summary": "[TBC] 清明節 (重疊補假)"},
    {"dtstart": ["20260501", {"value": "DATE"}], "dtend": ["20260502", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260501@1823.gov.hk", "summary": "[TBC] 勞動節"},
    {"dtstart": ["20260525", {"value": "DATE"}], "dtend": ["20260526", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260515@1823.gov.hk", "summary": "[TBC] 佛誕 (補假)"},
    {"dtstart": ["20260619", {"value": "DATE"}], "dtend": ["20260620", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260616@1823.gov.hk", "summary": "[TBC] 端午節"},
    {"dtstart": ["20260701", {"value": "DATE"}], "dtend": ["20260702", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260701@1823.gov.hk", "summary": "[TBC] 香港特別行政區成立紀念日"},
    {"dtstart": ["20260926", {"value": "DATE"}], "dtend": ["20260927", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20260915@1823.gov.hk", "summary": "[TBC] 中秋節翌日"},
    {"dtstart": ["20261001", {"value": "DATE"}], "dtend": ["20261002", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261001@1823.gov.hk", "summary": "[TBC] 國慶日"},
    {"dtstart": ["20261019", {"value": "DATE"}], "dtend": ["20261020", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261009@1823.gov.hk", "summary": "[TBC] 重陽節 (補假)"},
    {"dtstart": ["20261225", {"value": "DATE"}], "dtend": ["20261226", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261225@1823.gov.hk", "summary": "[TBC] 聖誕節"},
    {"dtstart": ["20261226", {"value": "DATE"}], "dtend": ["20261227", {"value": "DATE"}], "transp": "TRANSPARENT", "uid": "20261228@1823.gov.hk", "summary": "[TBC] 聖誕節後第一個工作日"} 
    ]
}]

}

;