const navEl = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const toggler = document.querySelector('.fa-bars');
const logo = document.querySelector('.navbar_icon');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        navLinks.forEach(link => link.classList.add('nav-dark'));
        toggler.classList.add('icon-dark');
        logo.classList.add('navbar_icon--scroll');
    } else {
        navEl.classList.remove('navbar-scrolled');
        navLinks.forEach(link => link.classList.remove('nav-dark'));
        toggler.classList.remove('icon-dark');
        logo.classList.remove('navbar_icon--scroll');
    }
});

window.addEventListener('load', function () {
    const body = document.body;
    body.style.opacity = '1';
});
