document.addEventListener('DOMContentLoaded', function () {
    const navBarBackground = document.querySelector('.navbar');
    const navBarToggler = document.querySelector('.navbar-toggler-icon');
    const navBarLogo = document.querySelector('.navbar_logo');
    const body = document.body;

    function toggleNavbar() {
        if (navBarBackground.classList.contains('navbar-blue')) {
            navBarBackground.classList.remove('navbar-blue');
            navBarLogo.classList.remove('navbar-blue--logo');
        } else {
            navBarBackground.classList.add('navbar-blue');
            navBarLogo.classList.add('navbar-blue--logo');
        }
    }

    navBarToggler.addEventListener('click', debounce(toggleNavbar, 300));

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navBarBackground.classList.add('navbar-white');
            navBarLogo.classList.add('navbar_logo--scroll');
        } else {
            navBarBackground.classList.remove('navbar-white');
            navBarLogo.classList.remove('navbar_logo--scroll');
        }
    });

    // Set a short delay for the body opacity to ensure styles are applied before revealing the content
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
});

// Debounce function to prevent rapid firing of the toggleNavbar function
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
