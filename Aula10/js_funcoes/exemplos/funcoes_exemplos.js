// 1. FUNÇÃO BÁSICA (VOID)
function MostraNome(){
    document.getElementById("resultado1").textContent = "Nome exibido: Wellington Soares";
}

// 2. FUNÇÃO COM PARÂMETROS
function UmNomeComFormulario(){
    const nomeDigitado = document.getElementById("nomeInput").value;
    document.getElementById("resultado2").textContent = "Nome recebido: " + nomeDigitado;
}

// 3. FUNÇÃO DE SOMA
function somarComFormulario(){
    const n1 = parseFloat(document.getElementById("numero1").value) || 0;
    const n2 = parseFloat(document.getElementById("numero2").value) || 0;
    document.getElementById("resultado3").textContent = `Calculo: ${n1} + ${n2} = ${n1 + n2}`;
}

// 4. FUNÇÃO COM RETURN
// Função pura: recebe dois números e RETORNA a soma
function somar(a, b) {
  return a + b; // <- o 'return' entrega o valor para quem chamou
}

// FUNÇÃO COM RETURN (usa a função acima)
function usarSomarComReturn() {
  const num1 = parseFloat(document.getElementById("calcNum1").value) || 0;
  const num2 = parseFloat(document.getElementById("calcNum2").value) || 0;

  const resultado = somar(num1, num2); // chama e recebe o valor de volta

  document.getElementById("resultado4").textContent =
    `Resultado: ${num1} + ${num2} = ${resultado}`;
}

// 5. FUNÇÃO FINANCEIRA
function verificarSituacao(){
    const ganhos = parseFloat(document.getElementById("ganhos").value) || 0;
    const gastos = parseFloat(document.getElementById("gastos").value) || 0;
    
    if (ganhos > gastos) {
        document.getElementById("resultado5").textContent = `✅ Sobraram R$ ${ganhos - gastos}`;
    } else {
        document.getElementById("resultado5").textContent = `❌ Faltam R$ ${gastos - ganhos}`;
    }
}

// 6. ARROW FUNCTION
const usarArrowFunction = () => {
    const ganhos = parseFloat(document.getElementById("arrowGanhos").value) || 0;
    const gastos = parseFloat(document.getElementById("arrowGastos").value) || 0;
    
    const resultado = ganhos > gastos ? "✅ Tudo ok!" : "❌ Está devendo!";
    document.getElementById("resultado6").textContent = resultado;
};