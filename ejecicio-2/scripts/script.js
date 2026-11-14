const sumar = document.getElementById('sumar')
const reiniciar = document.getElementById('reiniciar')
let span = document.getElementById('number')
let i = 0

sumar.addEventListener('click', (e) => {
    i += 1
    span.innerText = `${i}`

    if (i >= 10) {
        span.setAttribute('style', 'color: green')
    }

})

reiniciar.addEventListener('click', (e) => {
    i = 0
    span.innerText = `${i}`
    span.setAttribute('style', 'color: ')
})