
//DIFERENÇA DE EXECUÇÃO

const nome = "Docca Soares";
console.log(nome); // Valor da variável dispara automaticamente


function MostraNome(){
    console.log("Welington Soares")
}

//MostraNome() //Somente ao chamar a função ela é ativada

//pode se executada várias vezes
//MostraNome()
//MostraNome()
// MostraNome()

//FUNÇÃO DO TIPO VOID - uma função considerada 'vazia' por não ter 'return'.................................................

function ExibeNome(){
    const name = "Zé da Silva";
    console.log(name)
}

//ExibeNome()

//FUNCÃO COM PARÂMETROS....................................................................

function UmNome(nome){
    console.log(nome)

}
// console.log("Estela Zardo") //Aqui é passado o parâmetro a ser exibido

//É posssível que se passem vários parâmetros
//console.log("Antôno Pedro");
//console.log("Ana Paula");
//console.log("Eurípedes Leopoldo");

// function somar(n1, n2){
//     const somando = n1 + n2;
//     console.log(somando);
// }
somar(20, 10);


//FUNÇÃO COM RETURN..........................................................................................

function somar(n1, n2){
    const somando = n1 +n2;
    return somando;

}
//const resultado = somar(20, 40)
//console.log(resultado)

function MinhaDivida(ganhos, gastos){
    if (ganhos > gastos) {
       return "Está tudo ok";
    }
    else{
        return "você está devendo";
    }
    
}

const maria = MinhaDivida (3, 8);
const andre = MinhaDivida (6, 4);

// console.log(maria);
// console.log(andre);


function diaDoMes() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();        // Dia do mês (1-31)
    const mes = dataAtual.getMonth() + 1;   // Mês (0-11, por isso somamos 1)
    const ano = dataAtual.getFullYear();    // Ano com 4 dígitos
    
    return `${dia}/${mes}/${ano}`;// O uso da crase (`) em JavaScript nesse caso é para criar template literals (também conhecidos como template strings). Essas strings permitem a interpolação de variáveis
}

console.log(diaDoMes());


//ARROW FUNCTION/FUNÇÃO SETA...................................................................
/*Uma arrow function é uma forma mais curta e moderna de declarar funções em JavaScript.
Ela é útil principalmente quando queremos definir funções simples e de forma mais direta, evitando o uso da palavra-chave function.
Além da sintaxe mais curta, as arrow functions também têm algumas características específicas (como o comportamento do this), mas para o exemplo básico, estamos focando na simplificação de código.*/

function NomeDaFuncao (){} //PARA EFEITO DE COMPARAÇÃO ESSA É UMA FUNÇÃO TRADICIONAL


const QualquerNomeServe = () => {}

const QualquerNome = (ganhos, gastos) => {
    if (ganhos > gastos) {
        return "Está tudo ok";
    } else {
        return "você está devendo";
    }
}
//console.log(QualquerNome(100, 50));  // "Está tudo ok"
//console.log(QualquerNome(30, 80));   // "você está devendo"