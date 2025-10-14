document.addEventListener('DOMContentLoaded', function() { // Aguarda o carregamento completo do DOM
    const dropbtn = document.querySelector('.dropbtn'); // Seleciona o botão do dropdown
    const dropdownContent = document.getElementById('myDropdown'); // Seleciona o conteúdo do dropdown pelo ID

    dropbtn.addEventListener('click', function() { // Adiciona um evento de clique ao botão
        // Alterna a exibição do conteúdo do dropdown entre 'block' e 'none'
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function(event) {
        // Verifica se o clique foi fora do botão e do conteúdo do dropdown
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none'; // Esconde o dropdown
        }
    });
});
