// Ler o valor correspondente ao salário mensal (variável SM)
// de um trabalhador e também o valor do percentual de reajuste
// (variável PR) a ser atribuído. Apresentar o valor do novo salário
// (variável NS).

function calcular() {
    let sm = parseFloat(document.getElementById("sm").value);
    let pr = parseFloat(document.getElementById("pr").value);


    reajuste = sm + (sm * pr / 100);
    
    document.getElementById("res").innerHTML=`O salário reajustado é equivalente a R$ ${reajuste.toFixed(2)}`;
}