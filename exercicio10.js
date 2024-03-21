// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function tabuada (){
    var num = parseInt(prompt("DIgite um número inteiro para a tabuada:"));
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    for (var count = 1; count <= 10; count++) {
        tabuada += num + " x " + count + " = " + (num * count) + "<br>";
    }

    resposta.innerHTML = tabuada;
}