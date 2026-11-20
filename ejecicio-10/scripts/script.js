const botones = document.querySelectorAll('button')
const mensaje = document.querySelector('span')

const red = document.getElementById('rojo')
const yellow = document.getElementById('amarillo')
const green = document.getElementById('verde')

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (boton.id == 'btnRed') {
            red.style.opacity = 1
            yellow.style.opacity = 0.2
            green.style.opacity = 0.2

        } else if (boton.id == 'btnYellow') {
            red.style.opacity = 0.2
            yellow.style.opacity = 1
            green.style.opacity = 0.2
        } else if (boton.id == 'btnGreen') {
            red.style.opacity = 0.2
            yellow.style.opacity = 0.2
            green.style.opacity = 1
        }

        mensaje.innerText = red.style.opacity == 1 ? 'Espera' : yellow.style.opacity == 1 ? 'Precaución' : green.style.opacity == 1 ? 'Puedes avanzar' : ''
        mensaje.style.color = red.style.opacity == 1 ? 'red' : yellow.style.opacity == 1 ? 'orange' : green.style.opacity == 1 ? 'green' : ''
    })


});

