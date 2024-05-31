const body = document.querySelector("body")
const burger = document.querySelector(".header-burger")
const headerMenu = document.querySelector(".header-menu-top")

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('active')
})