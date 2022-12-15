// Ler dois inteiros (variáveis A e B)
// e imprimir o resultado do quadrado
// da diferença do primeiro valor pelo segundo.

function calcular() {
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    let real = parseFloat(document.getElementById("real").value);

    conversao = real / cotacao;
    
    document.getElementById("res").innerHTML=`A conversão gerou um total de ${conversao.toFixed(2)} dólares`;
}