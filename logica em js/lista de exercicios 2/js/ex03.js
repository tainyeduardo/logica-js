// Escreva um algoritmo para ler o salário mensal 
// atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário. 

function calcular() {
    let salario = parseInt(document.getElementById("salario").value);
    let reajuste = parseInt(document.getElementById("reajuste").value);

    let calculotaxa = (salario*reajuste)/100;
    let calculo = calculotaxa+salario;


    document.getElementById("calculo").innerHTML=`o salario reajustado é: ${calculo}`;

}