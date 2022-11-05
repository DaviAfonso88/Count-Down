const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');
const dias = document.getElementById('dias');

const timeRemainingInSeconds = 10;
let timerIsRunning = false;

function start() {
    if (!timerIsRunning)
        contagemRegressiva(tempoRestante());

    timerIsRunning = true;
}

let formatarDigito = (digito) => `0${digito}`.slice(-2);

let atualizar = (tempo) => {
    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor(tempo % (60 * 60) / 60);
    const qtdHoras = Math.floor(tempo % (60 * 60 * 24) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

let contagemRegressiva = (tempo) => {
    let interval = setInterval(() => {
        if (tempo === 0 || Date.now() <= tempo) {
            clearInterval(interval);
            console.warn("Time is up!");
            timerIsRunning = false;
        }

        atualizar(tempo);
        tempo--;
    }, 1000);
}

let tempoRestante = () => {
    let dataEvento = Date.now() + timeRemainingInSeconds;
    let hoje = Date.now();

    return Math.floor((dataEvento - hoje));
}