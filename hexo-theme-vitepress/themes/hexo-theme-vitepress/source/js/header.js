// 页面下滑操作

window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let windowX = window.innerWidth;

    const header = document.getElementById('header');
    const headerBar = document.getElementById('headerBar');

    if (scrollY == 0) {
        header.classList.remove('noTop');
    } else {
        if (windowX >= 431) {
            header.classList.add('noTop');
        } else {
            header.classList.add('phoneNoTop');
            headerBar.style.display = 'none';
            
            const postMenu = document.getElementById('postMenu');
            const post = document.getElementById('post');
            if (post != null && postMenu != null) {
                if (scrollY >= 64) {
                    postMenu.style.position = 'fixed';
                    post.style.marginTop = '45px';
                } else {
                    postMenu.style.position = 'static';
                    post.style.marginTop = '0'; 
                }
            }
        }
    }
});