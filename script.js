// Variável para armazenar o que está sendo exibido
let display = document.getElementById("display");

// Adiciona valores no display ao clicar nos botões
function adicionarValor(valor) {
    display.value += valor; // Concatena os números ou operadores no display
}

// Define a operação escolhida
function operacao(op) {
    display.value += ` ${op} `; // Adiciona o operador com espaços para legibilidade
}

// Realiza o cálculo
function calcular() {
    try {
        // Usa a função eval para avaliar a expressão matemática
        let resultado = eval(display.value.replace(/ /g, '')); // Remove os espaços antes de calcular
        display.value = resultado; // Exibe o resultado
    } catch (error) {
        display.value = "Erro"; // Mostra erro se a expressão for inválida
    }
}

// Limpa o display
function limpar() {
    display.value = ""; // Reseta o conteúdo do display
}
