// Exercício: Sliding Window Maximum
// Problema: Dado um array de números inteiros e um tamanho de janela k,
// encontre o valor máximo em cada subarray (janela) de tamanho k.

// Exemplo:
// nums = [1,3,-1,-3,5,3,6,7], k = 3
// Saída esperada: [3,3,5,5,6,7]
// Explicação:
// - Janela [1,3,-1] → máximo = 3
// - Janela [3,-1,-3] → máximo = 3
// - Janela [-1,-3,5] → máximo = 5
// - Janela [-3,5,3] → máximo = 5
// - Janela [5,3,6] → máximo = 6
// - Janela [3,6,7] → máximo = 7

// Passo a passo da solução (usando Deque):
// 1. Usamos uma estrutura deque (fila dupla) para armazenar índices.
// 2. Iteramos pelo array:
//    - Removemos do deque índices fora da janela atual.
//    - Removemos do deque índices cujos valores são menores que o atual.
//    - Adicionamos o índice atual ao deque.
//    - O primeiro índice do deque sempre será o máximo da janela.
// 3. Adicionamos esse máximo ao resultado a cada janela completa.
// 4. Retornamos o array resultado.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays e deque (simulado com array em JS)
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Manipulação de índices
// - Comparação de valores

// Complexidade de tempo (Big O):
// - Cada elemento é processado no máximo duas vezes (entra e sai do deque).
// - Portanto, a solução é O(n).

// Implementação da função:
function maxSlidingWindow(nums, k) {
  let deque = []; // guarda índices
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove índices fora da janela
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove valores menores que o atual
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // Adiciona índice atual
    deque.push(i);

    // Adiciona máximo da janela ao resultado
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Testes:
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Saída: [3,3,5,5,6,7]
console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)); // Saída: [10,10,9,2]
console.log(maxSlidingWindow([1], 1)); // Saída: [1]
console.log(maxSlidingWindow([1, 2, 3, 4, 5], 2)); // Saída: [2,3,4,5]
