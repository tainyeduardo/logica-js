// Elaborar um programa que calcule e apresente o volume de uma caixa retangular,
// por meio da fórmula VOLUME=COMPRIMENTO * LARGURA * ALTURA.

function calcular() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);

    volumeconta = comprimento * largura * altura

    document.getElementById("volume").innerHTML=`O volume é: ${volumeconta}m³`;


}