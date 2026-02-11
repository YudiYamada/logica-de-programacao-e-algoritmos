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
  let arrResult = []; // Array que armazenará o resultado da mesclagem
  let i = 0, // Índice para percorrer arrLeft
    j = 0; // Índice para percorrer arrRight

  // Enquanto houver elementos em ambos os arrays
  while (i < arrLeft.length && j < arrRight.length) {
    // Compara os elementos atuais de cada array
    if (arrLeft[i] < arrRight[j]) {
      arrResult.push(arrLeft[i]); // Adiciona o menor nome ao resultado
      i++; // Avança no array da esquerda
    } else {
      arrResult.push(arrRight[j]); // Adiciona o menor nome ao resultado
      j++; // Avança no array da direita
    }
  }

  // Concatena os elementos restantes (se houver) de cada array
  // Apenas um dos dois terá sobras, pois o outro já foi totalmente percorrido
  return arrResult.concat(arrLeft.slice(i)).concat(arrRight.slice(j));
}

function mergeSort(arr) {
  // Caso base: arrays com 0 ou 1 elemento já estão ordenados
  if (arr.length <= 1) {
    return arr;
  }

  // Calcula o índice do meio para dividir o array
  const mid = Math.floor(arr.length / 2);

  // Divide o array em duas metades
  const arrLeft = mergeSort(arr.slice(0, mid)); // primeira metade
  const arrRight = mergeSort(arr.slice(mid)); // segunda metade

  // Combina as duas metades ordenadas
  return merge(arrLeft, arrRight);
}

// Testando
console.log("Array original:", nomes);
console.log("Array ordenado:", mergeSort(nomes));
