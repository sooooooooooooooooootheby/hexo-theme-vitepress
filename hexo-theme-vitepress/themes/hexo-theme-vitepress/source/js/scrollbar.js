window.addEventListener("DOMContentLoaded", function () {
    const post = document.getElementById("post");
    const scrollbar = document.getElementById("post-scrollbar");

    // 监听滚动事件,控制滚动条
    post.addEventListener("scroll", function () {
        var scrollPercentage =
            (post.scrollTop / (post.scrollHeight - post.clientHeight)) * 100;
        scrollbar.style.top = scrollPercentage + "%";
    });
});
