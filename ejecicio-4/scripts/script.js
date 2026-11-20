const select = document.querySelector('select')
const card = document.getElementsByClassName('card')

select.addEventListener('change', (e) => {
    switch (select.value) {
        case '1':
            card[0].style.backgroundColor = 'cornflowerblue'
            break
        case '2':
            card[0].style.backgroundColor = 'green'
            break
        case '3':
            card[0].style.backgroundColor = 'gold'
            break
        case '4':
            card[0].style.backgroundColor = 'pink'
            break

    }

})