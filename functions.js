// functions.js

function abrirAbaConfig() {
    var abaFluante = document.getElementById("abafluante");
    var abaConfig = document.getElementById("abaConfig");
    var abaTrafego = document.getElementById("abaTrafego");
    var abaAltomoçao = document.getElementById("abaAltomoçao");
    abaFluante.style.display = "flex"; // Mostra a aba flutuante
    abaConfig.style.display = "block"; // Mostra a aba Config
    abaTrafego.style.display = "none"; // Esconde a aba Trafego
    abaAltomoçao.style.display = "none"; // Esconde a aba Altomoçao
}

function fecharAbaConfig() {
    var abaConfig = document.getElementById("abaConfig");
    var abaFluante = document.getElementById("abafluante");
    abaFluante.style.display = "none"; // Esconde a aba flutuante
    abaConfig.style.display = "none"; // Esconde a aba Config
}

function abrirAbaTrafego() {
    var abaTrafego = document.getElementById("abaTrafego");
    var abaFluante = document.getElementById("abafluante");
    var abaConfig = document.getElementById("abaConfig");
    var abaAltomoçao = document.getElementById("abaAltomoçao");
    abaConfig.style.display = "none"; // Esconde a aba Config
    abaAltomoçao.style.display = "none"; // Esconde a aba Altomoçao
    abaFluante.style.display = "flex"; // Mostra a aba flutuante
    abaTrafego.style.display = "block"; // Mostra a aba Trafego
}

function fecharAbaTrafego() {
    var abaTrafego = document.getElementById("abaTrafego");
    var abaFluante = document.getElementById("abafluante");
    abaFluante.style.display = "none"; // Esconde a aba flutuante
    abaTrafego.style.display = "none"; // Esconde a aba Trafego
}

function abrirAbaAltomoçao() {
    var abaAltomoçao = document.getElementById("abaAltomoçao");
    var abaFluante = document.getElementById("abafluante");
    abaFluante.style.display = "flex"; // Mostra a aba flutuante
    abaAltomoçao.style.display = "block"; // Mostra a aba Altomoçao
}

function fecharAbaAltomoçao() {
    var abaAltomoçao = document.getElementById("abaAltomoçao");
    var abaFluante = document.getElementById("abafluante");
    abaFluante.style.display = "none"; // Esconde a aba flutuante
    abaAltomoçao.style.display = "none"; // Esconde a aba Altomoçao
}
