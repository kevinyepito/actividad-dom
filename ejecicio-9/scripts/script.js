const form = document.querySelector('form')
const nombreCard = document.querySelector('.card-title')
const profesionCard = document.querySelector('.card-text')
const imagenCard = document.querySelector('#imagenCard')

form.addEventListener('input', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const profesion = document.getElementById('profesion').value
    const imagen = document.getElementById('imagen').value

    let nuevoNombre = ""
    let nuevaProfesion = ""
    let nuevaImagen = ""

    if (nuevoNombre != nombre || nombre == "" && nuevoNombre != "") {
        nuevoNombre = nombre
        nombreCard.innerHTML = nuevoNombre
    }

    if (nuevaProfesion != profesion || profesion == "" && nuevaProfesion != "") {
        nuevaProfesion = profesion
        profesionCard.innerHTML = nuevaProfesion
    }

    if (imagen != "") {
        nuevaImagen = imagen
        imagenCard.src = nuevaImagen
    }

})