

const form = document.querySelector('form')
const IMC = document.getElementById('resultado')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const peso = document.getElementById('peso').value
    const estatura = document.getElementById('estatura').value

    if (peso != "" && estatura != "") {
        IMC.innerHTML = `IMC: ${peso / (estatura * estatura)}`
    }
})