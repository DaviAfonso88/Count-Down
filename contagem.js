

function start(){
    intervalo = setInterval(contagemRegressiva(tempoRestante()))
 }



var formatarDigito = (digito) => `0${digito}`.slice(-2);
var atualizar = (tempo) =>{
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');


    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor(tempo % (60 * 60) / 60);
    const qtdHoras = Math.floor(tempo % (60 * 60 * 24) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);

}

var contagemRegressiva = (tempo) =>{
    var pararContagem = () => clearInterval(id);

    var contar = () => {
        if (tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    var id = setInterval(contar, 1000);
    
    
}
var tempoRestante = () => {
    var dataEvento = new Date ('2022-11-05 20:00:00');
    var hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}
 



// contagemRegressiva(tempoRestante());

