function getTime(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
const timer = document.querySelector('#relogio')
const iniciar = document.querySelector('#iniciarbtn')
const pausar = document.querySelector('#pausebtn')
const zerar = document.querySelector('#zerarbtn')
let segundos = 0
let time;
function iniciaRelogio() {
    time = setInterval(function () {
        segundos++
        timer.innerHTML = getTime(segundos)
    }, 1000)
}
iniciar.addEventListener('click', function (event) {
    clearTimeout(time)
    iniciaRelogio()
})
pausar.addEventListener('click', function (event) {
    clearInterval(time);
})
zerar.addEventListener('click', function (event) {
    clearTimeout(time)
    timer.innerHTML = '00:00:00'
    segundos = 0
})