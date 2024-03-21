// 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

var valor1 = parseInt(prompt("Digite o primeiro valor:"));
var valor2;

do {
    valor2 = parseInt(prompt("Digite o segundo valor (não pode ser zero ou negativo)"));
 } while (valor2 <= 0);

 var resultado = valor1/valor2;

 alert("O resultado da divisão é: " + resultado.toFixed(2));

