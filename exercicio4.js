// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var soma = 0;
var contador = 0;

for (var i = 15; i <= 100; i++) {
    soma += i;
    contador++;
}

var media = soma / contador;

document.write("A média aritmética dos números entre 15 e 100 é: " + media);