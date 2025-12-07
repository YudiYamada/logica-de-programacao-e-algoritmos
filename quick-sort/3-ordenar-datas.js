// Exercício ordenar datas usando Quick Sort

// Dado o vetor:
let datas = [
  "2025-12-06",
  "2023-05-10",
  "2024-01-01",
  "2022-09-15",
  "2023-11-20",
];

// Use o algoritmo Quick Sort para ordenar as datas em ordem crescente (da mais antiga para a mais recente).

// Passo a passo do Quick Sort
// - Escolha do pivô: seleciona um elemento do array (geralmente o último).
// - Particionamento: reorganiza os elementos, colocando as datas menores (mais antigas) à esquerda
//   e as maiores (mais recentes) à direita.
// - Recursão: aplica o mesmo processo às sublistas da esquerda e da direita.
// - Resultado final: ao final das partições, o array completo estará ordenado.

// Resposta esperada:
// ["2022-09-15", "2023-05-10", "2023-11-20", "2024-01-01", "2025-12-06"]

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções recursivas
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de datas em JavaScript (new Date(...))
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
    if (new Date(arr[i]) < new Date(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testando
console.log("Array original:", datas);
console.log("Array ordenado:", quickSort(datas));
