const btn = document.querySelector('.btn');

if (btn) {
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

if (menuToggle && menuList) {
    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });
}
