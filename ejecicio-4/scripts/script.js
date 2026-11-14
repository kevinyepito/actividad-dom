const select = document.querySelector('select')
const card = document.getElementsByClassName('card')

select.addEventListener('change', (e) => {
    switch (select.value) {
        case '1':
            card[0].style.backgroundColor = 'blue'
            break
        case '2':
            card[0].style.backgroundColor = 'green'
            break
        case '3':
            card[0].style.backgroundColor = 'yellow'
            break
        case '4':
            card[0].style.backgroundColor = 'pink'
            break

    }

})