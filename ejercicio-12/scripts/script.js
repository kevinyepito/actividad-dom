const input = document.querySelector('input')
const form = document.querySelector('form')
const tabla = document.querySelector('table')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let numero = input.value
    let numeroTabla = document.getElementById('numeroTabla')
    numeroTabla.innerHTML = `${numero}`
    tabla.innerHTML = `
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>${numero} X 1</td><td>${numero * 1}</td></tr>
            <tr><td>${numero} X 2</td><td>${numero * 2}</td></tr>
            <tr><td>${numero} X 3</td><td>${numero * 3}</td></tr>
            <tr><td>${numero} X 4</td><td>${numero * 4}</td></tr>
            <tr><td>${numero} X 5</td><td>${numero * 5}</td></tr>
            <tr><td>${numero} X 6</td><td>${numero * 6}</td></tr>
            <tr><td>${numero} X 7</td><td>${numero * 7}</td></tr>
            <tr><td>${numero} X 8</td><td>${numero * 8}</td></tr>
            <tr><td>${numero} X 9</td><td>${numero * 9}</td></tr>
            <tr><td>${numero} X 10</td><td>${numero * 10}</td></tr>
        </tbody>`


})