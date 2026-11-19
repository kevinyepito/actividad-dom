const form = document.querySelector('form') // O usa el id de tu formulario
const error = document.getElementById('error-message')
const saludo = document.getElementById('saludo')
const input = document.getElementById('name')

form.addEventListener('submit', (e) => {
    e.preventDefault() // Evita que la página se recargue
    saludar()
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