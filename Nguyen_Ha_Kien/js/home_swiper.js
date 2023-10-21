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