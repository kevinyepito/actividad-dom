const form = document.querySelector('form')
const mensaje = document.querySelector('#mensaje')
let presupuesto = document.getElementById('presupuesto')
const gasto = document.getElementById('gasto')
const valor = document.getElementById('valor')
const lista = document.querySelector('ul')
let valido = false
const restante = document.getElementById('restante')
const inicial = document.getElementById('inicial')
const gastado = document.getElementById('gastado')
let totalGastado = 0


form.addEventListener('submit', (e) => {
    e.preventDefault()






    inicial.innerText = presupuesto.value
    totalGastado += Number(valor.value)
    restanteValor = presupuesto.value - totalGastado


    if (valido && valor.value != "") {
        lista.innerHTML += `<li>${gasto.value}: ${valor.value}</li>`
        gastado.innerText = `${totalGastado}`
        restante.innerText = `${restanteValor}`
        gasto.value = ""
        valor.value = ""
    }






})

valor.addEventListener('input', (e) => {
    if (presupuesto.value - totalGastado < Number(valor.value)) {
        console.log('presupuesto excedido')
        mensaje.style.color = 'red'
        mensaje.innerText = 'Has superado tu presupuesto'
        valido = false
    } else {
        mensaje.innerText = ''
        valido = true
    }
})
