// Exercício: Calcular proporções de positivos, negativos e zeros em um array (Plus Minus)

// Dado o vetor:
let arr = [-4, 3, -9, 0, 4, 1];

// Objetivo:
// Criar uma função que receba um array de inteiros
// e imprima a proporção de números positivos, negativos e zeros.
// Cada proporção deve ser mostrada com 6 casas decimais.

// Passo a passo:
// - Contar quantos elementos são positivos (n > 0).
// - Contar quantos elementos são negativos (n < 0).
// - Contar quantos elementos são zeros (n === 0).
// - Dividir cada contagem pelo tamanho total do array.
// - Exibir os resultados com 6 casas decimais (toFixed(6)).

// Resposta esperada para o exemplo:
// Positivos: 3/6 = 0.500000
// Negativos: 2/6 = 0.333333
// Zeros:     1/6 = 0.166667

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Funções de formatação numérica: toFixed
// - Operações matemáticas básicas

// Complexidade de tempo (Big O):
// - O(n), pois percorremos todos os elementos uma vez.
// Complexidade de espaço:
// - O(1), pois usamos apenas variáveis auxiliares.

// Implementação da função (versão simples e didática):
function plusMinus(arr) {
  let positivos = 0;
  let negativos = 0;
  let zeros = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) positivos++;
    else if (arr[i] < 0) negativos++;
    else zeros++;
  }

  console.log((positivos / n).toFixed(6));
  console.log((negativos / n).toFixed(6));
  console.log((zeros / n).toFixed(6));
}

// Testando
console.log("Array original:", arr);
plusMinus(arr);
