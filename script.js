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
    $(document).ready(function() {
        $(".navbar-nav a").on('click', function(event) {
    
            if (navBarBackground.classList.contains('navbar-blue')) {
                navBarBackground.classList.remove('navbar-blue');
                navBarLogo.classList.remove('navbar-blue--logo');
            } else {
                navBarBackground.classList.add('navbar-blue');
                navBarLogo.classList.add('navbar-blue--logo');
            }
    
            if (this.hash !== "") {
                var hash = this.hash;
                $('.navbar-collapse').collapse('hide');
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){ 
                    if(history.pushState) {
                        history.pushState(null, null, hash);
                    } else {
                        window.location.hash = hash;
                    }
                });
                event.preventDefault();
            }
        });
    });
    
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

    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
});

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
