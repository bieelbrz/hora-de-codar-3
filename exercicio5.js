// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
var segundoNumero = parseInt(prompt("Digite o segundo número (ele deve ser maior do que o primeiro: "));

if (primeiroNumero > segundoNumero) {
    alert("O primeiro número deve ser menor do que o segundo.");

} else {
    var soma = 0;
    var contador = 0;

for (var i = primeiroNumero; i <= segundoNumero; i++) {
    soma += i;
    contador++;
}

var media = soma/contador;

alert("A média aritmética dos números entre " + primeiroNumero + " e " + segundoNumero + " é " + media);
}