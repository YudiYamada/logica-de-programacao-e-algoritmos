// Exercício ordenar um vetor usando Merge Sort

// Dado o vetor:
let arr = [38, 27, 43, 3, 9, 82, 10];

// Use o algoritmo Merge Sort para ordenar os elementos em ordem crescente.

// Passo a passo do Merge Sort
// - Divisão: o array é dividido recursivamente em duas metades até que cada subarray tenha apenas 1 elemento.
// - Conquista: arrays com 1 elemento já estão ordenados.
// - Combinação (Merge): mescla os subarrays comparando elemento por elemento.
// - Resultado final: ao final das mesclagens, o array completo estará ordenado.

// Resposta: O array ordenado será [3, 9, 10, 27, 38, 43, 82].

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: slice, concat
// - Estruturas de repetição: while
// - Condicionais: if

// Complexidade de tempo (Big O):
// O Merge Sort tem complexidade O(n log n) em todos os casos (melhor, pior e médio).
// Identificação: o array é dividido em log n níveis e em cada nível percorre n elementos.
// Complexidade de espaço: O(n), pois precisa de memória extra para armazenar subarrays.

// Implementação da função:
function merge(arrLeft, arrRigth) {
  const arrResult = []; // Array que armazenará o resultado da mesclagem
  let i = 0; // Índice para percorrer arrLeft
  let j = 0; // Índice para percorrer arrRigth

  // Enquanto houver elementos em ambos os arrays
  while (i < arrLeft.length && j < arrRigth.length) {
    // Compara os elementos atuais de cada array
    if (arrLeft[i] < arrRigth[j]) {
      arrResult.push(arrLeft[i]); // Adiciona o menor ao resultado
      i++; // Avança no array da esquerda
    } else {
      arrResult.push(arrRigth[j]); // Adiciona o menor ao resultado
      j++; // Avança no array da direita
    }
  }

  // Concatena os elementos restantes (se houver) de cada array
  // Apenas um dos dois terá sobras, pois o outro já foi totalmente percorrido
  return arrResult.concat(arrLeft.slice(i)).concat(arrRigth.slice(j));
}

// Função principal do Merge Sort
function mergeSort(arr) {
  // Caso base: arrays com 0 ou 1 elemento já estão ordenados
  if (arr.length <= 1) {
    return arr;
  }

  // Calcula o índice do meio para dividir o array
  const mid = Math.floor(arr.length / 2);

  // Divide o array em duas metades
  const left = arr.slice(0, mid); // primeira metade
  const rigth = arr.slice(mid); // segunda metade

  // Recursão: ordena cada metade separadamente
  const leftSort = mergeSort(left);
  const rightSort = mergeSort(rigth);

  // Combina as duas metades ordenadas
  return merge(leftSort, rightSort);
}

// Testando
console.log("Array original:", arr);
console.log("Array ordenado:", mergeSort(arr));
