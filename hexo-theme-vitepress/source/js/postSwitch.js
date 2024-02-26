// 文章页的按钮操作逻辑
document.addEventListener("DOMContentLoaded", function () {
    const listSw = document.getElementById("postListSwitch");
    const postList = document.getElementById("postList");
    const list = document.getElementById("list");

    // 文章列表开关
    listSw.onclick = function () {
        postList.classList.add("showPostList");
        list.classList.add("showList");
    };
    postList.onclick = function (event) {
        postList.classList.remove("showPostList");
        list.classList.remove("showList");
    };

    // 目录开关
    // 需要根据导航栏是否隐藏判断目录位置
    const tocSw = document.getElementById("postTocSwitch");
    tocSw.addEventListener("click", (event) => {
        const tocIcon = document.getElementById("tocIcon");
        const toc = document.getElementById("toc");
        // 点击目录开关时
        let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // 判断开关状态
            if (tocSw.checked) {
                tocIcon.style.rotate = "90deg";
                // 如果滚动高度为0
                if (scrollHeight == 0) {
                    toc.classList.add("showToc");
                } else {
                    toc.classList.add("showTopToc");
                }
            } else {
                tocIcon.style.rotate = "0deg";
                toc.classList.remove("showToc");
                toc.classList.remove("showTopToc");
            }
    });
});
