// Initialization WOW.js
new WOW().init();

// Menu hidden-visible
window.addEventListener("scroll", function () {
    document.querySelector(".menu").classList.toggle("menu_hidden", window.scrollY < 130);
});

//Menu item of the active section & smooth scroll
const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu__link').forEach((link) => {
                link.classList.toggle(
                    'menu__link_active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.9,
});

document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);

document.querySelector('.menu__list').addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
        event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: "smooth",
        });
    }
});

document.querySelector('.main-sect__to-next-sect-arrow').addEventListener('click', (event) => {
    if (event.target.classList.contains('main-sect__to-next-sect-link')) {
        event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: "smooth",
        });
    }
});