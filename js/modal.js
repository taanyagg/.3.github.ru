const modalClicks = document.querySelectorAll('.main-modal .modal-click')
const modal = document.querySelector('.modal')
const back = document.querySelector('.back')

let distance = 0;
window.onscroll = function(e) {
  distance = window.scrollY;
};

window.addEventListener('load', () => {
    distance = window.scrollY;
})

modalClicks.forEach((click, key) => {
    click.addEventListener('click', () => {
        modal.classList.add('active')
        back.classList.add('active')
        back.style.top = `${distance}px`
        modal.style.top = `calc(50% + ${distance}px)`
        body.style.overflowY = 'hidden'
        if (modal.children.length == 1) {
            modal.removeChild(modal.children[0])
        }
        const image = document.createElement('img')
        image.classList.add('h-[649px]', 'flex-1', 'relative', 'max-w-full', 'overflow-hidden', 'object-cover', 'z-[1]')
        if (key == 0) {
            image.src = '/public/img-4686@2x.png'
        } else if (key == 1) {
            image.src = '/public/img-4770@2x.png'
        }
        modal.append(image)
    })
})

back.addEventListener('click', () => {
    modal.classList.remove('active')
    back.classList.remove('active')
    body.style.overflowY = 'auto'
})