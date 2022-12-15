// Ler dois inteiros (variáveis A e B)
// e imprimir o resultado do quadrado
// da diferença do primeiro valor pelo segundo.

function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    diferenca = a - b;
    quadrado = diferenca * diferenca;

    document.getElementById("res").innerHTML=`O quadrado da diferença é: ${quadrado}`;


}