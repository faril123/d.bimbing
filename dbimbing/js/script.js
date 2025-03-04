document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');

    const handleScroll = () => {
        if (window.scrollY > 1400 && window.scrollY < 2990) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');

        if (navbar.classList.contains('active')) {
            header.classList.add('menu-open');
        } else {
            header.classList.remove('menu-open');
        }
    };

    handleScroll();
});
