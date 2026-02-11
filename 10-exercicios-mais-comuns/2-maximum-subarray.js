// Exercício: Maximum Subarray (Kadane’s Algorithm)
// Problema: Dado um vetor de números inteiros (positivos e negativos),
// encontre a soma máxima de um subarray contínuo.

// Exemplo:
// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// O subarray com soma máxima é [4, -1, 2, 1], cuja soma é 6.

// Passo a passo da solução (Kadane’s Algorithm):
// 1. Inicializamos duas variáveis:
//    - maxAtual (currentMax): guarda a soma máxima até o índice atual.
//    - maxGlobal (globalMax): guarda a maior soma encontrada até agora.
// 2. Iteramos pelo array:
//    - Para cada elemento, atualizamos maxAtual como o maior entre:
//      → o próprio elemento
//      → o elemento somado ao maxAtual anterior
//    - Atualizamos maxGlobal se maxAtual for maior.
// 3. Ao final, maxGlobal será a soma máxima do subarray.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (Math.max)
// - Conceito de subarray contínuo

// Complexidade de tempo (Big O):
// - O algoritmo percorre o array uma única vez → O(n).
// - Não usa estruturas adicionais significativas → O(1) de espaço.
// - Portanto, a solução é eficiente: O(n).

// Implementação da função:
function maxSubArray(nums) {
  let maxAtual = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxAtual = Math.max(nums[i], maxAtual + nums[i]);
    if (maxAtual > maxGlobal) {
      maxGlobal = maxAtual;
    }
  }

  return maxGlobal;
}

// Testes:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Saída: 6
console.log(maxSubArray([1])); // Saída: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Saída: 23
