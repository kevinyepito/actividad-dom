const input = document.querySelector('input')

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const mensaje = document.querySelector('#texto')
        mensaje.innerHTML = input.value
        input.value = ""
    }
})