const form = document.querySelector('form')



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const edad = document.getElementById('edad').value
    let correo = document.getElementById('correo').value
    let correoSpan = document.getElementById('correoSpan')
    let edadSpan = document.getElementById('edadSpan')

    if (!correo.includes("@")) {
        correoSpan.style.color = 'red'
        correoSpan.innerText = 'debe contener @'
    } else {
        correoSpan.innerText = ''
    }

    if (edad < 18) {
        edadSpan.style.color = 'red'
        edadSpan.innerText = 'edad menor a 18'
        return
    } else {

        edadSpan.innerText = ''
    }


})