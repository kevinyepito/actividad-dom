const botones = document.querySelectorAll('button')

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
    })

});

