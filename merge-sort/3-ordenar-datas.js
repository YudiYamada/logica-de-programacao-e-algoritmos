// Exercício ordenar datas usando Merge Sort

// Dado o vetor:
let datas = [
  "2025-12-06",
  "2023-05-10",
  "2024-01-01",
  "2022-09-15",
  "2023-11-20",
];

// Use o algoritmo Merge Sort para ordenar as datas em ordem crescente (da mais antiga para a mais recente).

// Passo a passo do Merge Sort
// - Divisão: o array é dividido recursivamente em duas metades até que cada subarray tenha apenas 1 elemento.
// - Conquista: arrays com 1 elemento já estão ordenados.
// - Combinação (Merge): mescla os subarrays comparando elemento por elemento.
// - Resultado final: ao final das mesclagens, o array completo estará ordenado.

// Resposta esperada:
// ["2022-09-15", "2023-05-10", "2023-11-20", "2024-01-01", "2025-12-06"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: slice, concat
// - Estruturas de repetição: while
// - Condicionais: if
// - Comparação de datas em JavaScript (new Date(...))

// Complexidade de tempo (Big O):
// O Merge Sort tem complexidade O(n log n) em todos os casos.
// Complexidade de espaço: O(n), pois precisa de memória extra para armazenar subarrays.

// Implementação da função:

// Função merge: combina dois arrays já ordenados em um único array ordenado
function merge(arrLeft, arrRight) {
  let arrResult = []; // Array que armazenará o resultado da mesclagem
  let i = 0; // Índice para percorrer arrLeft
  let j = 0; // Índice para percorrer arrRight

  // Enquanto houver elementos em ambos os arrays
  while (i < arrLeft.length && j < arrRight.length) {
    // Converte cada string em objeto Date para comparar corretamente
    if (new Date(arrLeft[i]) < new Date(arrRight[j])) {
      arrResult.push(arrLeft[i]); // Adiciona a menor data ao resultado
      i++; // Avança no array da esquerda
    } else {
      arrResult.push(arrRight[j]); // Adiciona a menor data ao resultado
      j++; // Avança no array da direita
    }
  }

  // Concatena os elementos restantes (se houver) de cada array
  // Apenas um dos dois terá sobras, pois o outro já foi totalmente percorrido
  return arrResult.concat(arrLeft.slice(i)).concat(arrRight.slice(j));
}

// Função principal do Merge Sort
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
console.log("Array original:", datas);
console.log("Array ordenado:", mergeSort(datas));
