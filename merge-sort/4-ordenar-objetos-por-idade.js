// Exercício ordenar objetos por idade usando Merge Sort

// Dado o vetor:
let pessoas = [
  { nome: "Carlos", idade: 32 },
  { nome: "Ana", idade: 25 },
  { nome: "Beatriz", idade: 29 },
  { nome: "Eduardo", idade: 40 },
  { nome: "Daniel", idade: 35 },
  { nome: "Fernanda", idade: 28 },
  { nome: "Bruno", idade: 30 },
];

// Use o algoritmo Merge Sort para ordenar os objetos em ordem crescente de idade.

// Passo a passo do Merge Sort
// - Divisão: o array é dividido recursivamente em duas metades até que cada subarray tenha apenas 1 elemento.
// - Conquista: arrays com 1 elemento já estão ordenados.
// - Combinação (Merge): mescla os subarrays comparando elemento por elemento.
// - Resultado final: ao final das mesclagens, o array completo estará ordenado.

// Resposta esperada:
// [
//   { nome: "Ana", idade: 25 },
//   { nome: "Fernanda", idade: 28 },
//   { nome: "Beatriz", idade: 29 },
//   { nome: "Bruno", idade: 30 },
//   { nome: "Carlos", idade: 32 },
//   { nome: "Daniel", idade: 35 },
//   { nome: "Eduardo", idade: 40 }
// ]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: slice, concat
// - Estruturas de repetição: while
// - Condicionais: if
// - Comparação de objetos em JavaScript (usando propriedades)

// Complexidade de tempo (Big O):
// O Merge Sort tem complexidade O(n log n) em todos os casos.
// Complexidade de espaço: O(n), pois precisa de memória extra para armazenar subarrays.

// Implementação da função:

// Função merge: combina dois arrays já ordenados em um único array ordenado
function merge(arrLeft, arrRight) {
  let arrResult = []; // Array que armazenará o resultado da mesclagem
  let i = 0, // Índice para percorrer arrLeft
    j = 0; // Índice para percorrer arrRight

  // Enquanto houver elementos em ambos os arrays
  while (i < arrLeft.length && j < arrRight.length) {
    // Compara os objetos pela propriedade "idade"
    if (arrLeft[i].idade < arrRight[j].idade) {
      arrResult.push(arrLeft[i]); // Adiciona o objeto com menor idade ao resultado
      i++; // Avança no array da esquerda
    } else {
      arrResult.push(arrRight[j]); // Adiciona o objeto com menor idade ao resultado
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
console.log("Array original:", pessoas);
console.log("Array ordenado:", mergeSort(pessoas));
