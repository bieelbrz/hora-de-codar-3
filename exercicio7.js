// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
// Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var notas = [];

for (var i = 1; i <= 6; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + " (entre 0 e 10): "));

    while (nota < 0 || nota > 10) {
        nota = parseFloat(prompt("Nota inválida! Digite novamente a nota " + i + " (entre 0 e 10):"));
    }

    notas.push(nota);
}

var soma = 0;
for (var j = 0; j < notas.length; j++) {
    soma += notas[j];
}

var media = soma / notas.length;

alert("A média das notas é: " + media.toFixed(2));