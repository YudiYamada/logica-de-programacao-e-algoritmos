// Exercício ordenar um vetor usando Quick Sort

// Dado o vetor:
let arr = [38, 27, 43, 3, 9, 82, 10];

// Use o algoritmo Quick Sort para ordenar os elementos em ordem crescente.

// Passo a passo do Quick Sort
// - Escolha do pivô: seleciona um elemento do array (geralmente o último).
// - Particionamento: reorganiza os elementos, colocando os menores que o pivô à esquerda
//   e os maiores ou iguais à direita.
// - Recursão: aplica o mesmo processo às sublistas da esquerda e da direita.
// - Resultado final: ao final das partições, o array completo estará ordenado.

// Resposta esperada: [3, 9, 10, 27, 38, 43, 82]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Manipulação de arrays: push, concat
// - Estruturas de repetição: for
// - Condicionais: if
// - Conceito de pivô e particionamento

// Complexidade de tempo (Big O):
// - Melhor caso: O(n log n)
// - Caso médio: O(n log n)
// - Pior caso: O(n²) (quando o pivô é mal escolhido)
// Complexidade de espaço: O(log n) se in-place, ou O(n) se usar arrays auxiliares.

// Implementação da função (versão simples e didática):
function quickSort(arr) {
  if (arr.length <= 1) return arr; // caso base: arrays com 0 ou 1 elemento já estão ordenados

  let pivot = arr[arr.length - 1]; // escolhe o último elemento como pivô
  let arrLeft = []; // array para armazenar elementos menores que o pivô
  let arrRight = []; // array para armazenar elementos maiores ou iguais ao pivô

  // percorre todos os elementos, exceto o pivô
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot)
      arrLeft.push(arr[i]); // se menor que o pivô → vai para a esquerda
    else arrRight.push(arr[i]); // se maior ou igual → vai para a direita
  }

  // recursão: ordena os subarrays e junta tudo com o pivô no meio
  return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
}

// Testando
console.log("Array original:", arr); // imprime o array inicial
console.log("Array ordenado:", quickSort(arr)); // imprime o array ordenado após aplicar Quick Sort
