// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem
// do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual
// do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o
// custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

function calcular() {
    let fabrica = parseInt(document.getElementById("fabrica").value);

    let calculoimposto = (fabrica*45)/100;
    let calculodistribuidor = (fabrica*28)/100;
    let calculofinal = calculodistribuidor+calculoimposto+fabrica;

    document.getElementById("calculofinal").innerHTML=`O valor final do carro é: ${calculofinal}`;
}