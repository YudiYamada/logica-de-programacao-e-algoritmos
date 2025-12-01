// Exercício encontrar o índice de inserção (Busca Binária)

// Dado o vetor ordenado:

let arr = [5, 7, 8, 12, 15, 20, 30];

// Use o algoritmo de busca binária para encontrar o índice onde o elemento 10 DEVERIA
// ser inserido para manter a ordem, ou seu índice atual se ele já existir.

// Passo a passo da busca binária (Busca de Inserção)
// Alvo = 10
// 1. Início = 0, Fim = 6. Meio = 3. Valor no índice 3 é 12.
//    → 12 é maior que 10. Fim = 2. (Armazena 3 como possível índice de inserção)
// 2. Início = 0, Fim = 2. Meio = 1. Valor no índice 1 é 7.
//    → 7 é menor que 10. Início = 2.
// 3. Início = 2, Fim = 2. Meio = 2. Valor no índice 2 é 8.
//    → 8 é menor que 10. Início = 3.
// 4. Início = 3, Fim = 2. A condição (inicio <= fim) é FALSE, o loop termina.
//    O valor de 'inicio' no final do loop (3) é o índice onde 10 deve ser inserido.

// Resposta: O índice de inserção retornado é 3 (onde está o 12).
// O array ficaria: [5, 7, 8, 10, 12, 15, 20, 30].

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays (ordenados)
// - Estruturas de repetição: while
// - Condicionais: if/else
// - A lógica de que, ao final do loop, o valor de 'inicio' aponta para o
//   primeiro elemento maior que o alvo, que é o local de inserção.

// Complexidade de tempo (Big O):
// A busca binária garante O(log n), pois reduz o espaço de busca pela metade
// até que 'inicio' e 'fim' se cruzem, apontando para o local correto.
// Por isso, a notação Big O é O(log n).

// Implementação da função:
function encontrarIndiceInsercao(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;

    if (arr[mid] === target) {
      return `O elemento já existe no índice ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `O índice de inserção para o elemento ${target} é ${start}`;
}

console.log(encontrarIndiceInsercao(arr, 10)); // Saída: O índice de inserção para o elemento 10 é 3
console.log(encontrarIndiceInsercao(arr, 15)); // Saída: O elemento já existe no índice 4
console.log(encontrarIndiceInsercao(arr, 40)); // Saída: O índice de inserção para o elemento 40 é 7
