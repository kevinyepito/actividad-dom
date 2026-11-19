const form = document.querySelector('form')
const ul = document.querySelector('ul')


ul.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        e.target.remove()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const pendiente = document.querySelector('input').value
    const lista = document.querySelector('ul')

    if (pendiente != "") {
        lista.innerHTML += `<li><span>${pendiente}</span></li>`
        document.querySelector('input').value = ""
    }

})