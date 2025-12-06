// Exercício ordenar nomes em ordem alfabética usando Merge Sort

// Dado o vetor:
let nomes = [
  "Carlos",
  "Ana",
  "Beatriz",
  "Eduardo",
  "Daniel",
  "Fernanda",
  "Bruno",
];

// Use o algoritmo Merge Sort para ordenar os elementos em ordem alfabética (A → Z).

// Passo a passo do Merge Sort
// - Divisão: o array é dividido recursivamente em duas metades até que cada subarray tenha apenas 1 elemento.
// - Conquista: arrays com 1 elemento já estão ordenados.
// - Combinação (Merge): mescla os subarrays comparando elemento por elemento.
// - Resultado final: ao final das mesclagens, o array completo estará ordenado.

// Resposta esperada: ["Ana", "Beatriz", "Bruno", "Carlos", "Daniel", "Eduardo", "Fernanda"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: slice, concat
// - Estruturas de repetição: while
// - Condicionais: if
// - Comparação de strings em JavaScript (operador <)

// Complexidade de tempo (Big O):
// O Merge Sort tem complexidade O(n log n) em todos os casos.
// Complexidade de espaço: O(n), pois precisa de memória extra para armazenar subarrays.

// Implementação da função:
function merge(arrLeft, arrRight) {
  let arrResult = [];
  let i = 0,
    j = 0;

  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      arrResult.push(arrLeft[i]);
      i++;
    } else {
      arrResult.push(arrRight[j]);
      j++;
    }
  }

  return arrResult.concat(arrLeft.slice(i)).concat(arrRight.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, mid));
  const arrRight = mergeSort(arr.slice(mid));

  return merge(arrLeft, arrRight);
}

// Testando
console.log("Array original:", nomes);
console.log("Array ordenado:", mergeSort(nomes));
