const navBarBackground = document.querySelector('.navbar');
const navBarToggler = document.querySelector('.navbar-toggler-icon');
const navbarLogo = document.querySelector('.navbar_logo');

// Function to toggle the solid color background of the banner

function toggleNavbarBackground() {
    if (window.scrollY == 0) {
        navEl.classList.add('navbar-blue');
        navEl.classList.remove('navbar-transparent');
    } else {
        navEl.classList.remove('navbar-blue');
        navEl.classList.add('navbar-transparent');
    }
}

// Event listener for the toggler button

navBarToggler.addEventListener('click', toggleNavbarBackground);

 
// Funcion - Transparente a blanco al hacer scroll en versión desktop

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navBarBackground.classList.add('navbar-white');
        navbarLogo.classList.add('navbar_logo--scroll');
    } else {
        navBarBackground.classList.remove('navbar-white');
        navbarLogo.classList.remove('navbar_logo--scroll');
    }
});

window.addEventListener('load', function () {
    const body = document.body;
    body.style.opacity = '1';
});
