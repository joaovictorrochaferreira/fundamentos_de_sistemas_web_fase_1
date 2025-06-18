// scripts.js

// Adiciona um "ouvinte de evento" que espera todo o conteúdo HTML da página (DOM) ser completamente carregado e analisado pelo navegador antes de executar a função interna.
// Isso garante que o script não tente manipular elementos que ainda não existem na página.
document.addEventListener('DOMContentLoaded', function() {
    
    // Tenta selecionar o elemento HTML que tem o ID 'mensagemBoasVindas'.
    // Este é o <div> que contém a mensagem de boas-vindas.
    const mensagem = document.getElementById('mensagemBoasVindas');

    // Verifica se o elemento com o ID 'mensagemBoasVindas' foi encontrado na página.
    // Isso é uma boa prática para evitar erros caso o elemento não exista por algum motivo.
    if (mensagem) {
        // 1. Torna a mensagem de boas-vindas visível.
        // O estilo 'display: none;' (definido no HTML) é alterado para 'block',
        // fazendo com que o elemento ocupe seu espaço e apareça na tela.
        mensagem.style.display = 'block'; 

        // 2. Configura um temporizador (timer) usando setTimeout.
        // A função interna (que esconde a mensagem) será executada UMA VEZ após o tempo especificado.
        setTimeout(function() {
            // Altera o estilo 'display' da mensagem de volta para 'none', escondendo-a novamente.
            mensagem.style.display = 'none';
        }, 5000); // Tempo em milissegundos. 5000ms = 5 segundos.
                  // Ajuste este valor para mudar por quanto tempo a mensagem fica visível.
    }
});