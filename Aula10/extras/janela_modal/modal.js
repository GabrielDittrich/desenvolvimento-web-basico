//Funções e interações em JavaScript

        // Captura o botão de abrir o modal
        const btnAbrirModal = document.getElementById('btnAbrirModal');

        // Captura o botão de fechar o modal
        const btnFecharModal = document.getElementById('btnFecharModal');

        // Captura a div do modal (que contém o conteúdo e o fundo escuro)
        const modal = document.getElementById('modal');

        // Função para abrir o modal
        function abrirModal() {
            modal.style.display = 'flex'; // Exibe o modal, mudando o display para flex
        }

        // Função para fechar o modal
        function fecharModal() {
            modal.style.display = 'none'; // Esconde o modal, mudando o display para none
        }

        // Adiciona um evento de clique no botão de abrir o modal
        btnAbrirModal.addEventListener('click', abrirModal);

        // Adiciona um evento de clique no botão de fechar o modal
        btnFecharModal.addEventListener('click', fecharModal);
 

      
       /*   
    // Captura os elementos do modal e botões
    const modal = document.getElementById('modal');
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const btnFecharModal = document.getElementById('btnFecharModal');

    // Adiciona o evento de clique para abrir o modal
    btnAbrirModal.addEventListener('click', () => modal.style.display = 'flex');

    // Adiciona o evento de clique para fechar o modal
    btnFecharModal.addEventListener('click', () => modal.style.display = 'none');

       */