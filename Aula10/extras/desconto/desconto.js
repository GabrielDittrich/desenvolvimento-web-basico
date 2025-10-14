// Função para calcular o valor com desconto
function aplicarDesconto(valor) {
    const desconto = valor * 0.10;  // Calcula 10% de desconto
    const valorFinal = valor - desconto;  // Subtrai o desconto do valor total
    return valorFinal;  // Retorna o valor final
}

// Captura o formulário e o local do resultado
const form = document.getElementById('formDesconto');
const resultadoDiv = document.getElementById('resultado');

// Adiciona um evento para tratar o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o recarregamento da página

    // Captura o valor da compra
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);

    // Chama a função aplicarDesconto
    const valorComDesconto = aplicarDesconto(valorCompra);

    // Exibe o resultado na página
    resultadoDiv.textContent = "O valor final com desconto é: R$ " + valorComDesconto.toFixed(2);
});
