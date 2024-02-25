// 明暗主题变化
var checkbox = document.getElementById("themeCheckbox");

// 页面加载时从本地存储获取主题并应用
document.addEventListener("DOMContentLoaded", function () {
    applyThemeFromLocalStorage();
});

// 从本地存储获取主题并应用
function applyThemeFromLocalStorage() {
    var theme = localStorage.getItem("theme");
    if (theme) {
        checkbox.checked = theme === "dark";
        setTheme(theme);
    }
}

// 监听复选框变化事件
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        setTheme("dark");
        saveThemeToLocalStorage("dark");
    } else {
        setTheme("light");
        saveThemeToLocalStorage("light");
    }
});

// 保存主题到本地存储
function saveThemeToLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

// 设置主题
const setTheme = (theme) => (document.documentElement.className = theme);
