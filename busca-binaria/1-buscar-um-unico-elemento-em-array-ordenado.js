// Exercício buscar um único elemento em array ordenado

// Dado o vetor ordenado:

let arr = [5, 7, 8, 12, 15, 20, 30];

// Use o algoritmo de busca binária para encontrar o índice do elemento 15.

// Passo a passo da busca binária
// 1. Início = 0, Fim = 6. Meio = Math.floor((0 + 6) / 2) = 3. Valor no índice 3 é 12.
//    → 12 é menor que 15. Ignora a metade esquerda.
// 2. Início = 4, Fim = 6. Meio = Math.floor((4 + 6) / 2) = 5. Valor no índice 5 é 20.
//    → 20 é maior que 15. Ignora a metade direita.
// 3. Início = 4, Fim = 4. Meio = Math.floor((4 + 4) / 2) = 4. Valor no índice 4 é 15.
//    → 15 é igual a 15. Achou!

// Resposta: O índice retornado é 4.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays (obrigatoriamente ordenados)
// - Estruturas de repetição: while
// - Condicionais: if/else if/else
// - Manipulação de índices (início, fim, meio)
// - Comparação de valores (===, <, >)

// Complexidade de tempo (Big O):
// O algoritmo reduz o espaço de busca pela metade em cada etapa.
// No pior caso, ele precisa de apenas log₂(n) operações.
// Por isso, a notação Big O é O(log n).
// Identificação: feita observando que o laço "while" se repete logaritmicamente
// em relação ao tamanho do array (n).

// Implementação da função:
function buscarBinario(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = ((start + end) / 2);

    if (arr[mid] === target) {
      return `O elemento está no índice ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "Número não encontrado";
}

console.log(buscarBinario(arr, 15)); // Saída: O elemento está no índice 4
console.log(buscarBinario(arr, 10)); // Saída: Número não encontrado
