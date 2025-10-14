        // Função para calcular a área do retângulo
        function calcularAreaRetangulo(largura, altura) {
            const area = largura * altura;  // Calcula a área
            return area;  // Retorna a área calculada
        }

        // Captura o formulário e o local de resultado
        const form = document.getElementById('formArea');
        const resultadoDiv = document.getElementById('resultado');

        // Adiciona um evento para tratar o envio do formulário
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página

            // Captura os valores da largura e altura
            const largura = parseFloat(document.getElementById('largura').value);
            const altura = parseFloat(document.getElementById('altura').value);

            // Chama a função para calcular a área
            const area = calcularAreaRetangulo(largura, altura);

            // Exibe o resultado na página
            resultadoDiv.textContent = "A área do retângulo é: " + area;
        });
