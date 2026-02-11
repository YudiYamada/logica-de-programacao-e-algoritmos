// Exercício: Top K Frequent Elements
// Problema: Dado um array de números inteiros e um valor k,
// retorne os k elementos mais frequentes no array.

// Exemplo:
// nums = [1,1,1,2,2,3], k = 2
// Saída esperada: [1,2]
// Explicação: O número 1 aparece 3 vezes, o número 2 aparece 2 vezes.
// São os dois mais frequentes.

// Passo a passo da solução:
// 1. Criar um mapa de frequências para contar quantas vezes cada número aparece.
// 2. Converter o mapa em uma lista de pares [número, frequência].
// 3. Ordenar essa lista pela frequência em ordem decrescente.
// 4. Selecionar os k primeiros elementos.
// 5. Retornar apenas os números correspondentes.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays e objetos (hash map)
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Ordenação de arrays (sort)
// - Manipulação de pares chave-valor

// Complexidade de tempo (Big O):
// - Contagem das frequências: O(n).
// - Ordenação dos elementos distintos: O(m log m), onde m é o número de elementos únicos.
// - Portanto, a solução completa é O(n log n) no pior caso.

// Implementação da função:
function topKFrequent(nums, k) {
  let freqMap = {};

  // 1. Contar frequências
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // 2. Converter em lista de pares
  let freqArray = Object.entries(freqMap); // [ [num, freq], ... ]

  // 3. Ordenar pela frequência decrescente
  freqArray.sort((a, b) => b[1] - a[1]);

  // 4. Selecionar os k primeiros
  let result = freqArray.slice(0, k).map((pair) => Number(pair[0]));

  return result;
}

// Testes:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Saída: [1,2]
console.log(topKFrequent([4, 4, 4, 4, 5, 5, 6], 1)); // Saída: [4]
console.log(topKFrequent([7, 7, 8, 8, 8, 9], 2)); // Saída: [8,7]
console.log(topKFrequent([1], 1)); // Saída: [1]
