// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B,
// e efetuar a troca dos valores de forma que a variável A passe a possuir o
// valor da variável B e a variável B passe a possuir o valor da variável A.
// Apresentar os valores trocados.

function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let auxiliar = 0;

    auxiliar = a;
    a = b;
    b = auxiliar;

    document.getElementById("trocaa").innerHTML=`valor A: ${a}`;

    document.getElementById("trocab").innerHTML=`valor B: ${b}`;

}