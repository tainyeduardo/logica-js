// Ler dois inteiros (variáveis A e B)
// e imprimir o resultado do quadrado
// da diferença do primeiro valor pelo segundo.

function calcular() {
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    let dolar = parseFloat(document.getElementById("dolar").value);

    conversao = cotacao * dolar;
    
    document.getElementById("res").innerHTML=`A conversão gerou um total de ${conversao.toFixed(2)} reais`;
}