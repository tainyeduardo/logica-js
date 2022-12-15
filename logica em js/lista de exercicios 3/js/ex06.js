// Elaborar um programa que efetue a leitura de três valores (A, B e C)
// e apresente como resultado final à soma dos quadrados dos três valores lidos.

function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    contaa = a * a;
    contab = b * b;
    contac = c * c;

    soma = contaa + contab + contac;
    
    document.getElementById("res").innerHTML=`A soma dos quadrados dos valores A, B e C é: ${soma}`;
}