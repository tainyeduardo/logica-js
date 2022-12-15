// Escreva um algoritmo para ler as dimensões de um
//  trapézio (base maior, base menor e altura), calcular
//   e escrever a área do trapézio. a=(B+b).h/2 

var maior = parseInt(prompt("para calcular a area do trapézio, primeiro insira a base maior dele: "));
var menor = parseInt(prompt("agora, insira a base menor: "));
var altura = parseInt(prompt("e por último, insira a altura do mesmo: "));
var area = (maior+menor)*altura/2;

alert("a area do trapézio é: "+area)
