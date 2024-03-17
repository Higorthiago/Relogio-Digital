const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let datetoday = new Date()
    let hr = datetoday.getHours()
    let min = datetoday.getMinutes()
    let se = datetoday.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(se < 10) se = '0' + se

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = se

})  