
// Naming themes
let temp = {
    themes: []
};
temp.themes =  temp.themes.concat(CONFIG_HONG_KONG_COMMON_NAMING_THEMES);
temp.themes =  temp.themes.concat(CONFIG_POKEMON_NAMING_THEMES);
const CONFIG_NAMING_THEMES = temp;
console.log(CONFIG_NAMING_THEMES)
// Mutator lists
const CONFIG_MUTATORS = {
    numbers: [
        { chinese: "一", english: "One" },
        { chinese: "二", english: "Two" },
        { chinese: "三", english: "Three" },
        { chinese: "四", english: "Four" },
        { chinese: "五", english: "Five" },
        { chinese: "六", english: "Six" },
        { chinese: "七", english: "Seven" },
        { chinese: "八", english: "Eight" },
        { chinese: "九", english: "Nine" },
        { chinese: "十", english: "Ten" }
    ],
    colors: [
        { chinese: "紅", english: "Red" },
        { chinese: "橙", english: "Orange" },
        { chinese: "黃", english: "Yellow" },
        { chinese: "綠", english: "Green" },
        { chinese: "藍", english: "Blue" },
        { chinese: "靛", english: "Indigo" },
        { chinese: "紫", english: "Purple" }
    ]
};