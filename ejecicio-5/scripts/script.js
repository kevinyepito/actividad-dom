const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {

    if (e.key === 'Enter' && input.value != "") {
        const mensaje = document.querySelector('#texto')
        mensaje.innerHTML += `<li>${input.value}</li>`
        input.value = ""
    }
})