// Exercício: Calcular a diferença absoluta entre as diagonais de uma matriz quadrada

// Dada a matriz:
let matriz = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

// Objetivo:
// Criar uma função que receba uma matriz quadrada
// e retorne a diferença absoluta entre a soma da diagonal principal
// e a soma da diagonal secundária.

// Passo a passo:
// - Diagonal principal: elementos arr[i][i] (mesmo índice de linha e coluna).
// - Diagonal secundária: elementos arr[i][n - 1 - i] (coluna espelhada).
// - Somar cada diagonal.
// - Calcular diferença absoluta: Math.abs(somaPrincipal - somaSecundaria).

// Resposta esperada:
// Diagonal principal = 11 + 5 + (-12) = 4
// Diagonal secundária = 4 + 5 + 10 = 19
// Diferença absoluta = |4 - 19| = 15

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: matrizes (arrays bidimensionais)
// - Estruturas de repetição: for
// - Condicionais: não são necessárias aqui
// - Funções matemáticas: Math.abs
// - Índices de arrays em JavaScript

// Complexidade de tempo (Big O):
// - O(n), pois percorremos apenas uma vez cada linha.
// Complexidade de espaço:
// - O(1), pois usamos apenas variáveis auxiliares.

// Implementação da função (versão simples e didática):
function diagonalDifference(arr) {
  let somaPrincipal = 0;
  let somaSecundaria = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    somaPrincipal += arr[i][i];           // diagonal principal
    somaSecundaria += arr[i][n - 1 - i];  // diagonal secundária
  }

  return Math.abs(somaPrincipal - somaSecundaria);
}

// Testando
console.log("Matriz original:", matriz);
console.log("Diferença das diagonais:", diagonalDifference(matriz)); // 15