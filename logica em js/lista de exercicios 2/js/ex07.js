// Calcular e apresentar o valor do volume de uma lata
// de óleo, utilizando a fórmula: Volume = π*Raio2*Altura

function calcular() {
    let raio = parseFloat(document.getElementById("raio").value);
    let altura = parseFloat(document.getElementById("altura").value);


    let calculovolume = 3.14*raio*2*altura;

    document.getElementById("calculovolume").innerHTML=`o volume da lata é igual a: ${calculovolume}m³`;

}