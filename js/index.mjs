import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const firstSlider = {
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }
}

new Swiper('.swiper-container-first', firstSlider)