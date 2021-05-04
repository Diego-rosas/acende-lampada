var engine = {
    "estados": ['desligado', 'ligado'],
    "hexadecimais":{
        'desligado': '#141414', //cor preta
        'ligado': '#E7D703',    //cor amarela
    }
}

//delcara  os audios
const audioLiga = new Audio('audio/liga.mp3');
const audioDesliga = new Audio('audio/desliga.mp3');


//declara as variaveis para os estados da lampada
var lampadaDesligada = engine.hexadecimais['desligado'];
var lampadaLigada = engine.hexadecimais['ligado'];


//declara as variaveis dos botoes
var btnLiga = document.getElementById("btn-lig");
var btnDesliga = document.getElementById("btn-desl");

  
//declara os eventos dos botoes
btnLiga.addEventListener('click', function(){
    audioLiga.play();
    acendeLampada(lampadaLigada);
})

btnDesliga.addEventListener('click', function(){
    audioDesliga.play();
    acendeLampada(lampadaDesligada);
})


//função para acender a lampada
function acendeLampada(estadoDalampada) {
    var corDaLampada = document.getElementById('lampada');

    corDaLampada.style.backgroundColor = estadoDalampada;
}




//API DE RECONHECIMENTO DE VOZ
var transcricaoAudio = "";
var respostaCorreta = "";




if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    var SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    var gravador = new SpeechAPI();

    gravador.continuos = false;
    gravador.lang = "pt-BR";








} else {
    alert('não tem suporte');
}

