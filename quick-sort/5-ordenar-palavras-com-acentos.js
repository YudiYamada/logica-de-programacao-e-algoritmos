// Exercício ordenar palavras com acentos usando Quick Sort

// Dado o vetor:
let palavras = [
  "Árvore",
  "Cão",
  "Banana",
  "Uva",
  "Maçã",
  "Pêssego",
  "Abacaxi",
];

// Use o algoritmo Quick Sort para ordenar as palavras em ordem alfabética (A → Z).

// Passo a passo do Quick Sort
// - Escolha do pivô: seleciona um elemento do array (geralmente o último).
// - Particionamento: reorganiza os elementos, colocando os menores (ordem alfabética) à esquerda
//   e os maiores ou iguais à direita.
// - Recursão: aplica o mesmo processo às sublistas da esquerda e da direita.
// - Resultado final: ao final das partições, o array completo estará ordenado.

// Resposta esperada:
// ["Abacaxi", "Árvore", "Banana", "Cão", "Maçã", "Pêssego", "Uva"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de strings com acentos em JavaScript (localeCompare)
// - Conceito de pivô e particionamento

// Complexidade de tempo (Big O):
// - Melhor caso: O(n log n)
// - Caso médio: O(n log n)
// - Pior caso: O(n²) (quando o pivô é mal escolhido)
// Complexidade de espaço: O(log n) se in-place, ou O(n) se usar arrays auxiliares.

// Implementação da função (versão simples e didática):
function quickSort(arr) {
  if (arr.length <= 1) return arr;               // caso base: array com 0 ou 1 elemento já está ordenado
  const pivot = arr[arr.length - 1];             // escolhe o último elemento como pivô
  const left = [], right = [];                   // arrays auxiliares

  for (let i = 0; i < arr.length - 1; i++) {     // percorre todos menos o pivô
    if (arr[i].localeCompare(pivot) < 0) left.push(arr[i]); // usa localeCompare para strings com acento
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // recursão + junção
}

// Testando
console.log("Array original:", palavras);
console.log("Array ordenado:", quickSort(palavras));