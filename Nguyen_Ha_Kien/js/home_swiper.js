const swiper = new Swiper('.swiper_main', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 2000,
    autoplay: {
        delay: 4000,
    },
});

var swiper_film = new Swiper(".swiper_film", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // speed: 2000,
    // autoplay: {
    //     delay: 4000,
    // },
});