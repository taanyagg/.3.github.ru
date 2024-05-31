const accordOpen = document.querySelectorAll('.accord-open')
const accordText = document.querySelectorAll('.accord-text')

accordOpen.forEach((accord, key) => {
    accord.addEventListener('click', () => {
        accord.children[1].classList.toggle('active')
        accordText[key].classList.toggle('active')
    })
})