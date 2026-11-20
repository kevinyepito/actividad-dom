const images = document.querySelectorAll('.miniatura')
const big = document.getElementById('big-image')
let anterior = images[2]
anterior.classList.add('active')
images.forEach(image => {
    image.addEventListener('click', () => {


        anterior.classList.remove('active')
        image.classList.add('active')
        anterior = image


        big.src = image.src

    })

});