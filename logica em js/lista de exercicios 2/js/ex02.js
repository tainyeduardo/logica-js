// Escreva um algoritmo para ler o número total de
// eleitores de um município, o número de votos brancos,
// nulos e válidos. Calcular e escrever o percentual que
// cada um representa em relação ao total de eleitores.

function calcular() {
    let validos = parseInt(document.getElementById("validos").value);
    let brancos = parseInt(document.getElementById("brancos").value);
    let nulos = parseInt(document.getElementById("nulos").value);

    let total = (validos+brancos+nulos);
    let calculovalido = (validos*100)/total;
    let calculobranco = (brancos*100)/total;
    let calculonulo = (nulos*100)/total;

    // document.write("porcentagem de eleitores válidos: "+calculovalido+"% <br>");
    // document.write("porcentagem de eleitores brancos: "+calculobranco+"% <br>");
    // document.write("porcentagem de eleitores nulos: "+calculonulo+"% <br>");

    document.getElementById("calculovalido").innerHTML=`porcentagem de eleitores validos: ${calculovalido}%`;
    document.getElementById("calculobranco").innerHTML=`porcentagem de eleitores brancos: ${calculobranco}%`;
    document.getElementById("calculonulo").innerHTML=`porcentagem de eleitores nulos: ${calculonulo}%`;
}