const navEl = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const toggler = document.querySelector('.fa-bars');
const banner = document.querySelector('.banner');
const bannerText = document.querySelector('.banner-texto');
const bannerColor = document.querySelector('.navbar-toggler-icon');
const navbarIcon = document.querySelector('.navbar_icon');

// Function to toggle the solid color background of the banner
function toggleBannerBackground() {
    banner.classList.toggle('solid-background');
    bannerText.classList.toggle('color-text');
}

// Event listener for the toggler button
bannerColor.addEventListener('click', toggleBannerBackground);

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
        navLinks.forEach(link => link.classList.add('nav-dark'));
        toggler.classList.add('icon-dark');
        navbarIcon.classList.add('navbar_icon--scroll');
    } else {
        navEl.classList.remove('navbar-scrolled');
        navLinks.forEach(link => link.classList.remove('nav-dark'));
        toggler.classList.remove('icon-dark');
        navbarIcon.classList.remove('navbar_icon--scroll');
    }
});

window.addEventListener('load', function () {
    const body = document.body;
    body.style.opacity = '1';
});
