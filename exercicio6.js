// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var alunosAprovados = 0

while (true) {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));

    var media = (nota1 + nota2) / 2;

    if (media >= 9.5) {
        alunosAprovados++;
        alert("Aluno aprovado! Média: " + media.toFixed(2));
    } else {
        alert("O aluno não atingiu a média de aprovação.");
    }

    var resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
    if (resposta !== "S") {
        break;
    }
}

alert("Quantidade de alunos aprovados: " + alunosAprovados);