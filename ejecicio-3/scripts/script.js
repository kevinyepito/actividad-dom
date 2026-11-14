const vertical = document.getElementById('vertical')
const horizondal = document.getElementById('horizontal')
const input = document.querySelector('input')

vertical.style.width = '1ch'
vertical.style.wordBreak = 'break-all'

input.addEventListener('input', (e) => {
    horizondal.innerText = input.value


    vertical.innerText = input.value
})