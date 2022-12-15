// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida
// em graus Celsius. A fórmula de conversão é C=(F-32) *(5/9), sendo
// F a temperatura em Fahrenheit e C a temperatura em Celsius.

function calcular() {
    let f = parseInt(document.getElementById("f").value);

    let calculoc = (f-32)*(5/9);

    document.getElementById("calculoc").innerHTML=`a temperatura convertida em Celsius é: ${calculoc}°C`;

}