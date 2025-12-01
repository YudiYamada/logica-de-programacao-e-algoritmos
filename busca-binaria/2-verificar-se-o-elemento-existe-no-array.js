// Exercício verificar se o elemento existe no array (Busca Binária)

// Dado o vetor ordenado:

let arr = [5, 7, 8, 12, 15, 20, 30];

// Use o algoritmo de busca binária para verificar se o elemento 8 existe no array.

// Passo a passo da busca binária
// 1. Início = 0, Fim = 6. Meio = 3. Valor no índice 3 é 12.
//    → 12 é maior que 8. Ignora a metade direita. Fim = 2.
// 2. Início = 0, Fim = 2. Meio = 1. Valor no índice 1 é 7.
//    → 7 é menor que 8. Ignora a metade esquerda. Início = 2.
// 3. Início = 2, Fim = 2. Meio = 2. Valor no índice 2 é 8.
//    → 8 é igual a 8. Achou! → retorna true.

// Resposta: O elemento 8 existe no array.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays (ordenados)
// - Estruturas de repetição: while
// - Condicionais: if/else
// - Manipulação de índices (início, fim, meio)
// - Retorno booleano (true/false)

// Complexidade de tempo (Big O):
// O algoritmo reduz o espaço de busca pela metade em cada etapa.
// No pior caso, ele precisa de apenas log₂(n) operações.
// Por isso, a notação Big O é O(log n).
// Identificação: feita observando que o laço "while" se repete logaritmicamente
// em relação ao tamanho do array (n).

// Implementação da função:
function existeElementoBinario(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (arr[mid] === target) {
      return `É ${true} que o elemento ${target} existe`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `É ${false} que o elemento ${target} existe`;
}

console.log(existeElementoBinario(arr, 8)); // true
console.log(existeElementoBinario(arr, 13)); // false
