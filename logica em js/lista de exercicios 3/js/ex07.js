// Elaborar um programa que efetue a leitura de três valores (A, B e C)
// e apresente como resultado final o quadrado da soma dos três valores lidos.

function calcular() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    soma = a + b + c;
    quadrado = soma ** 2;
    
    document.getElementById("res").innerHTML=`O quadrado da soma dos valores A, B e C é: ${quadrado}`;
}