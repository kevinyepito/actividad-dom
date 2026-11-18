const button = document.getElementById('button')
const error = document.getElementById('error-message')
const saludo = document.getElementById('saludo')
const input = document.getElementById('name')

button.addEventListener('click', saludar)
button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        saludarbutton.addEventListener('click', saludar)
    }
})

function saludar() {
    const name = input.value
    if (name) {
        saludo.innerText = `¡Hola ${name}!, Bienvenid@ `
    } else {
        if (saludo.innerText != "") {
            saludo.innerText = ""
        }
        error.setAttribute('style', 'color: red')
        error.innerText = `por favor, ingrese un nombre`
        return
    }
    if (error.innerText != "") {
        error.innerText = ""
    }
    input.value = ""
}