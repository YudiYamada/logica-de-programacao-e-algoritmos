// Exercício ordenar nomes em ordem alfabética usando Quick Sort

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

// Use o algoritmo Quick Sort para ordenar os elementos em ordem alfabética (A → Z).

// Passo a passo do Quick Sort
// - Escolha do pivô: seleciona um elemento do array (geralmente o último).
// - Particionamento: reorganiza os elementos, colocando os menores (ordem alfabética) à esquerda
//   e os maiores ou iguais à direita.
// - Recursão: aplica o mesmo processo às sublistas da esquerda e da direita.
// - Resultado final: ao final das partições, o array completo estará ordenado.

// Resposta esperada:
// ["Ana", "Beatriz", "Bruno", "Carlos", "Daniel", "Eduardo", "Fernanda"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de strings em JavaScript (operador <)
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
    if (arr[i] < pivot) left.push(arr[i]);       // se menor (ordem alfabética) → esquerda
    else right.push(arr[i]);                     // se maior ou igual → direita
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // recursão + junção
}

// Testando
console.log("Array original:", nomes);
console.log("Array ordenado:", quickSort(nomes));