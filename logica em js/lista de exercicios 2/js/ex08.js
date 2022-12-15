// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem,
// utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário
// deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem.
// Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA=TEMPO * VELOCIDADE.
// Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada
// na viagem com a fórmula LITROS_USADOS=DISTÂNCIA/12. Ao final, o programa deve apresentar os valores
// da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distância percorrida (DISTÂNCIA)
// e a quantidade de litros (LITROS_USADOS) utilizada na viagem.

function calcular() {
    let tempo = parseFloat(document.getElementById("tempo").value);
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    distancia = tempo * velocidade;
    let calculoconsumo = distancia/12;

    document.getElementById("calculoconsumo").innerHTML=`o consumo de combustível foi de : ${calculoconsumo} litros`;

    document.getElementById("velocidademedia").innerHTML=`A velocidade média da viagem foi de: ${velocidade}km/h`;

    document.getElementById("tempoviagem").innerHTML=`o tempo de viagem foi de: ${tempo} horas`

    document.getElementById("distanciatotal").innerHTML=`a distancia total foi de ${distancia} km`

}