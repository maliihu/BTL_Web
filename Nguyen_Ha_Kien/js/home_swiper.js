const swiper = new Swiper('.swiper_main', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1800,
    autoplay: {
        delay: 3000,
    },
});

var swiper_film = new Swiper(".swiper_film", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var breakpoints = [
    { mediaQuery: "(max-width: 575px)", slidesPerView: 1, spaceBetween: 0},
    { mediaQuery: "(max-width: 991px)", slidesPerView: 3, spaceBetween: 20},
    { mediaQuery: "(max-width: 1199px)", slidesPerView: 4, spaceBetween: 20},
];

function res() {
    var matched = false;
    for (var i = 0; i < breakpoints.length; i++) {
        if (window.matchMedia(breakpoints[i].mediaQuery).matches) {
            swiper_film.params.slidesPerView = breakpoints[i].slidesPerView;
            swiper_film.params.spaceBetween = breakpoints[i].spaceBetween;
            swiper_film.update();
            matched = true;
            break; 
        }
    }
    if (!matched) {
        swiper_film.params.slidesPerView = 4;
        swiper_film.params.spaceBetween = 50;
        swiper_film.update();
    }
}
res();
window.addEventListener("resize", res);