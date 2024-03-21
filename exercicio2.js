// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function countdown() {
    var seconds = 30
    var interval = setInterval(function() {
        document.write(seconds + "<br>");
        seconds--;
        if (seconds < 0) {
            clearInterval(interval);
            document.write("EXPLOSÃO");
        }
    } ,1000 )
}

countdown();