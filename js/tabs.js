const tabs = document.querySelectorAll('.tab-button')
const blocks = document.querySelectorAll('.platie, .ubci')

tabs.forEach((tab, key) => {
    tab.addEventListener('click', () => {
        const active = document.querySelector('.tab-button.bg-darkslategray')
        active.classList.remove('bg-darkslategray')
        active.classList.add('text-darkslategray')
        tab.classList.add('bg-darkslategray')
        tab.classList.remove('text-darkslategray')
        if (key == 0) {
            blocks[key].classList.add('active')
            blocks[key + 1].classList.remove('active')
        } else if (key == 1) {
            blocks[key].classList.add('active')
            blocks[key - 1].classList.remove('active')
        }
    })
})