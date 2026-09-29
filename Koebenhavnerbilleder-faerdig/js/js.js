/* Mobil Menu */
    const navicon = document.querySelector('.navicon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const logo = document.querySelector('.logo');

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    };

    navicon.addEventListener('click', toggleMobileMenu);
    mobileMenu.addEventListener('click', toggleMobileMenu);
    logo.addEventListener('click', () => {
        if (mobileMenu.classList.contains('flex')) {
            toggleMobileMenu();
        }
    });

/* check if an element is in viewport, then animate it with a class from a data-attribute    */
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animation]');
        elements.forEach(element => {
            const animationClass = element.getAttribute('data-animation');
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                 element.classList.add(animationClass);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);