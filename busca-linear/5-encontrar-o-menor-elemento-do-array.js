// Exercício encontrar o menor elemento do array usando busca linear

// Dado o vetor:

let arr = [12, 5, 8, 20, 15, 7, 30];

// Use o algoritmo de busca linear para encontrar o menor elemento do array.

// Passo a passo da busca linear
// - Comece assumindo que o primeiro elemento é o menor (12).
// - Índice 1 → valor = 5 → menor que 12 → atualiza menor = 5.
// - Índice 2 → valor = 8 → não é menor que 5.
// - Índice 3 → valor = 20 → não é menor que 5.
// - Índice 4 → valor = 15 → não é menor que 5.
// - Índice 5 → valor = 7 → não é menor que 5.
// - Índice 6 → valor = 30 → não é menor que 5.

// Resposta: O menor elemento do array é 5.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (<)

// Complexidade de tempo (Big O):
// O algoritmo percorre todos os elementos do array uma vez.
// No pior caso, ele precisa visitar todos os n elementos.
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" executa até arr.length vezes,
// e cada iteração realiza apenas operações constantes (comparação e atribuição).

// Implementação da função:
function searchSmallNumber(arr) {
  let smallNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNumber) {
      smallNumber = arr[i];
    }
  }
  return `O menor número do array é ${smallNumber}`;
}

console.log(searchSmallNumber(arr)); // O menor número do array é 5
