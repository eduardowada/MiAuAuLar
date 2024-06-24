// Seleciona o formulário pelo ID
var form = document.getElementById('contact-form');

// Seleciona a mensagem de sucesso pelo ID
var mensagemSucesso = document.getElementById('mensagem-sucesso');

// Adiciona um listener para o evento de submit do formulário
form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão de submit (envio via POST)
    event.preventDefault();

    // Exibe a mensagem de sucesso
    mensagemSucesso.style.display = 'block';

    // Limpa os campos do formulário (opcional)
    form.reset();

    // Após 5 segundos, oculta a mensagem de sucesso
    setTimeout(function() {
        mensagemSucesso.style.display = 'none';
    }, 5000); // 5000 milissegundos = 5 segundos
});
