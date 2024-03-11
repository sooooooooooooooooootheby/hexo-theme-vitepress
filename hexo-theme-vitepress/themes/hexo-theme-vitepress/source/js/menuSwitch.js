// 导航栏的按钮操作逻辑
let menuSwitch = document.getElementById("menuSwitch");

menuSwitch.addEventListener("change", function () {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hidemenu")) {
        menu.classList.remove("hidemenu");
        menu.classList.add("showmenu");
    } else {
        menu.classList.remove("showmenu");
        menu.classList.add("hidemenu");
    }
});
