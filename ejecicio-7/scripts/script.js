const pwdInput = document.getElementById('pwd')
const mensaje = document.querySelector('span')
pwdInput.addEventListener('input', (e) => {
    e.preventDefault()
    const longitud = pwdInput.value.length
    let nuevoTexto = ""
    let nuevoColor = ""

    if (longitud == 0) {
        nuevoColor = ""
        nuevoTexto = ""
    } else if (longitud < 6) {
        nuevoColor = "red"
        nuevoTexto = "Contraseña muy corta"
    } else if (longitud < 10) {
        nuevoColor = "yellow"
        nuevoTexto = "Contraseña aceptable"
    } else {
        nuevoColor = "green"
        nuevoTexto = "Contraseña fuerte"
    }

    if (mensaje.textContent != nuevoTexto) {
        mensaje.style.color = nuevoColor
        mensaje.innerText = nuevoTexto
    }
})