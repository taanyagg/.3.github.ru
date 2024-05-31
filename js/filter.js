const activeButton = document.querySelector('.tab-button.bg-darkslategray')
const filterButtons = document.querySelectorAll('.main-filter div')
const allCardsPlatie = document.querySelectorAll('.platie .mini, .platie .midi, .platie .maxi')
const allCardsUbci = document.querySelectorAll('.ubci .mini, .ubci .midi, .ubci .maxi')

allCardsPlatie.forEach(card => {
    card.classList.add('active')
})

allCardsUbci.forEach(card => {
    card.classList.add('active')
})

filterButtons.forEach((filterButton, key) => {
    filterButton.addEventListener('click', () => {
        const active = document.querySelector('.main-filter div.active')
        active.classList.remove('active')
        filterButton.classList.add('active')
        allCardsPlatie.forEach(card => {
            if (filterButton.classList.contains('all')) {
                card.classList.add('active')
            } else if (card.classList.contains(filterButton.classList[filterButton.classList.length - 2])) {
                card.classList.add('active')
            } else {
                card.classList.remove('active')
            }
        })
        allCardsUbci.forEach(card => {
            if (filterButton.classList.contains('all')) {
                card.classList.add('active')
            } else if (card.classList.contains(filterButton.classList[filterButton.classList.length - 2])) {
                card.classList.add('active')
            } else {
                card.classList.remove('active')
            }
        })
    })
})