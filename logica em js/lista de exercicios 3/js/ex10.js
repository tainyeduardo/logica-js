// Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C).
// Durante a apuração dos votos foram computados votos nulos e votos em branco,
// além dos votos válidos para cada candidato. Deve ser criado um programa de computador
// que efetue a leitura da quantidade de votos válidos para cada candidato,
// além de efetuar também a leitura da quantidade de votos nulos e votos em branco.
// Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos,
// nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores;
// o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores;
// o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores;
// o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores;
// o percentual correspondente de votos nulos em relação à quantidade de eleitores;
// e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.

function calcular() {
    let ca = parseFloat(document.getElementById("ca").value);
    let cb = parseFloat(document.getElementById("cb").value);
    let cc = parseFloat(document.getElementById("cc").value);
    let brancos = parseFloat(document.getElementById("brancos").value);
    let nulos = parseFloat(document.getElementById("nulos").value);

    totaleleitores = ca + cb + cc + brancos + nulos;
    validos = ca + cb + cc;
    pctvalidos = (validos)*100/totaleleitores;

    pcta = ca*100/totaleleitores;
    pctb = cb*100/totaleleitores;
    pctc = cc*100/totaleleitores;
    pctbranco = brancos*100/totaleleitores;
    pctnulo = nulos*100/totaleleitores;
    
    document.getElementById("res1").innerHTML=`Total de votos: ${totaleleitores}`;

    document.getElementById("res2").innerHTML=`Percentual de votos validos: ${pctvalidos.toFixed(2)}%`;

    document.getElementById("res3").innerHTML=`Percentual de votos no candidato A: ${pcta.toFixed(2)}%`;

    document.getElementById("res4").innerHTML=`Percentual de votos no candidato B: ${pctb.toFixed(2)}%`;

    document.getElementById("res5").innerHTML=`Percentual de votos no candidato C: ${pctc.toFixed(2)}%`;

    document.getElementById("res6").innerHTML=`Percentual de votos brancos: ${pctbranco.toFixed(2)}%`;

    document.getElementById("res7").innerHTML=`Percentual de votos nulos: ${pctnulo.toFixed(2)}%`;
}