// Exercício ordenar palavras por tamanho usando Merge Sort

// Dado o vetor:
let palavras = [
  "computador",
  "sol",
  "programação",
  "código",
  "AI",
  "javascript",
  "merge",
];

// Use o algoritmo Merge Sort para ordenar as palavras em ordem crescente de tamanho (número de caracteres).

// Passo a passo do Merge Sort
// - Divisão: o array é dividido recursivamente em duas metades até que cada subarray tenha apenas 1 elemento.
// - Conquista: arrays com 1 elemento já estão ordenados.
// - Combinação (Merge): mescla os subarrays comparando elemento por elemento.
// - Resultado final: ao final das mesclagens, o array completo estará ordenado.

// Resposta esperada:
// ["AI", "sol", "merge", "código", "javascript", "computador", "programação"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: slice, concat
// - Estruturas de repetição: while
// - Condicionais: if
// - Comparação de strings pelo tamanho (length)

// Complexidade de tempo (Big O):
// O Merge Sort tem complexidade O(n log n) em todos os casos.
// Complexidade de espaço: O(n), pois precisa de memória extra para armazenar subarrays.

// Implementação da função:
function merge(arrLeft, arrRight) {
  let arrResult = []; // Array que armazenará o resultado da mesclagem
  let i = 0, // Índice para percorrer arrLeft
    j = 0; // Índice para percorrer arrRight

  // Enquanto houver elementos em ambos os arrays
  while (i < arrLeft.length && j < arrRight.length) {
    // Compara o tamanho das strings (length)
    if (arrLeft[i].length < arrRight[j].length) {
      arrResult.push(arrLeft[i]); // Adiciona a menor palavra (em tamanho) ao resultado
      i++; // Avança no array da esquerda
    } else {
      arrResult.push(arrRight[j]); // Adiciona a menor palavra (em tamanho) ao resultado
      j++; // Avança no array da direita
    }
  }

  // Concatena os elementos restantes (se houver) de cada array
  // Apenas um dos dois terá sobras, pois o outro já foi totalmente percorrido
  return arrResult.concat(arrLeft.slice(i)).concat(arrRight.slice(j));
}

function mergeSort(arr) {
  // Caso base: arrays com 0 ou 1 elemento já estão ordenados
  if (arr.length <= 1) return arr;

  // Calcula o índice do meio para dividir o array
  let mid = Math.floor(arr.length / 2);

  // Divide o array em duas metades
  let leftSort = mergeSort(arr.slice(0, mid)); // primeira metade
  let rightSort = mergeSort(arr.slice(mid)); // segunda metade

  // Combina as duas metades ordenadas
  return merge(leftSort, rightSort);
}

// Testando
console.log("Array original:", palavras);
console.log("Array ordenado:", mergeSort(palavras));
