// slider code is taken from swiper demos
let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');
menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        700: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});