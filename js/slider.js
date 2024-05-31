const swiper = new Swiper()

const sliderImages = [
    'url("./public/slide1@2x.png")',
    'url("./public/img-4686@2x.png")',
    'url("./public/slide3.png")'
]

const header = document.querySelector('.header')
const sliderButtons = document.querySelectorAll('.slider-button')
const sliderStrilki = document.querySelectorAll('.slider-strelka')

header.style.backgroundImage = sliderImages[0]

sliderStrilki.forEach((sliderStrelka, key) => {
    sliderStrelka.addEventListener('click', () => {
        for (let i = 0; i < sliderImages.length; i++) {
            if (sliderImages[i] == header.style.backgroundImage) {
                if (i == 0 && key == 0) {
                    header.style.backgroundImage = sliderImages[sliderImages.length - 1]
                    return
                } else if (i == sliderImages.length - 1 && key == 1) {
                    header.style.backgroundImage = sliderImages[0]
                    return
                } else if (key == 0) {
                    header.style.backgroundImage = sliderImages[i - 1]
                    return
                } else if (key == 1) {
                    header.style.backgroundImage = sliderImages[i + 1]
                    return
                }
            }
            
        }
    })
})

sliderButtons.forEach((sliderButton, key) => {
    sliderButton.addEventListener('click', () => {
        header.style.backgroundImage = sliderImages[key]
    })
})