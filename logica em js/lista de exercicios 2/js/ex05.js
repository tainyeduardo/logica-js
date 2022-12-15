// Ler uma temperatura em graus Celsius e apresentá-la 
// convertida em graus Fahrenheit. A fórmula de conversão
// é F = (9*C + 160) /5, sendo F a temperatura em Fahrenheit
// e C a temperatura em Celsius.

function calcular() {
    let celsius = parseInt(document.getElementById("celsius").value);

    let calculof = (9*celsius+160)/5;

    document.getElementById("calculof").innerHTML=`a temperatura convertida em Fahrenheit é: ${calculof}°F`;

}