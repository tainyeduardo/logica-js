alert("para calcular sua idade em apenas dias, primeiro insira quantos anos, meses e dias você tem de idade: ");
var anos = parseInt(prompt("anos: "));
var meses = parseInt(prompt("meses: "));
var dias = parseInt(prompt("dias: "));
var calculoanos = anos*365;
var calculomeses = meses*30;
var soma = calculoanos + calculomeses + dias;
alert("sua idade expressa em apenas dias é de: "+soma+ " dias");