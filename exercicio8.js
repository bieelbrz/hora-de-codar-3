// 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
// N  é um valor informado pelo usuário

var N = parseInt(prompt("Digite um valor inteiro maior que zero (N):"));

while(N <= 0 || isNaN(N)) {
    alert("Valor inválido! Digite novamente um valor inteiro maior que zero (N): ");
    N = parseInt(prompt("Digite um valor inteiro maior que zero "));
}

var resultado = "";
for (var i = 1; i <= N; i++) {
    resultado += i + " ";
}
alert("Valores inteiros de 1 a " + N + ": " + resultado);