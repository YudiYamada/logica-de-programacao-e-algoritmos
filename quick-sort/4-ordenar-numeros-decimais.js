// Exercício ordenar números decimais usando Quick Sort

// Dado o vetor:
let valores = [45.5, 12.3, 78.9, 23.1, 56.7, 9.8, 34.2];

// Use o algoritmo Quick Sort para ordenar os elementos em ordem crescente.

// Passo a passo do Quick Sort
// - Escolha do pivô: seleciona um elemento do array (geralmente o último).
// - Particionamento: reorganiza os elementos, colocando os menores que o pivô à esquerda
//   e os maiores ou iguais à direita.
// - Recursão: aplica o mesmo processo às sublistas da esquerda e da direita.
// - Resultado final: ao final das partições, o array completo estará ordenado.

// Resposta esperada:
// [9.8, 12.3, 23.1, 34.2, 45.5, 56.7, 78.9]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de números decimais em JavaScript
// - Conceito de pivô e particionamento

// Complexidade de tempo (Big O):
// - Melhor caso: O(n log n)
// - Caso médio: O(n log n)
// - Pior caso: O(n²) (quando o pivô é mal escolhido)
// Complexidade de espaço: O(log n) se in-place, ou O(n) se usar arrays auxiliares.

// Implementação da função (versão simples e didática):
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testando
console.log("Array original:", valores);
console.log("Array ordenado:", quickSort(valores));
