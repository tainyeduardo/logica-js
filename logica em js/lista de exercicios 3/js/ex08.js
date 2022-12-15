// Elaborar um programa de computador que efetue a leitura de quatro valores
// inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o
// resultado do produto (variável P) do primeiro com o terceiro valor,
// e o resultado da soma (variável S) do segundo com o quarto valor.

function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);

    produtoac = a * c;
    somabd = b + d;
    
    document.getElementById("resum").innerHTML=`Produto AC: ${produtoac}`;
    document.getElementById("resdois").innerHTML=`Soma BD: ${somabd}`;
}