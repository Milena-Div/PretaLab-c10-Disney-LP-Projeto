let numeroAleatorio = Math.floor(Math.random() * 100)+1;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const palpiteDigitado = pegarPalpiteDigitado ();

    if (!palpiteDigitado) {
        alert("Digite um valor válido!");
        return;
    }

    if (palpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você adivinhou!")
        reiniciarJogo();
        return;
        
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
    atualizarFeedback ("O número é muito alto. Tente novamente.");

    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback ("O número é muito baixo. Tente novamente.");
    }

    const novaPontuacao = 100 - (tentativas*10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);
 }


    /*
    Guiado
    ---
    1. Não aceita palpite vazio
    2. Dar dicas a cada palpite (maior ou menor)
    3. Atualizar a pontuação a cada palpite errado
    4. Mostrar todos os palpites errados
    5. Deve-se poder reiniciar o jogo a qualquer momento
    6. Se a pontuação chegar a zero, deve ser exibido um alerta e reiniciado o jogo
    
    Individual
    ---
    7. Só deve aceitar numeros entre 1 e 100
    8. Não deve aceitar palpite repetido
    */


    // to-do

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja jovar novamente?");
    
    if (vaiReiniciar === true) {
        atualizarPalpitesFalhos("");
        atualizarPontuacao (100);
        atualizarFeedback("");
        limparPalpiteDigitado ();


    }



    // to-do
}
