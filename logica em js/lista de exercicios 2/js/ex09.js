// Efetuar o cálculo e a apresentação do
// valor de uma prestação em atraso, utilizando
// a fórmula PRESTACAO=VALOR+(VALOR*TAXA/100) *TEMPO).

function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let tempo = parseFloat(document.getElementById("tempo").value);

    let prestacao = valor+(valor*taxa/100)*tempo;

    document.getElementById("prestacao").innerHTML=`o valor da prestação em atraso é de ${prestacao} reais`;


}