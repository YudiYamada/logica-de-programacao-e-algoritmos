// Exercício encontrar o maior elemento do array usando busca linear

// Dado o vetor:

let arr = [12, 5, 8, 20, 15, 7, 30];

// Use o algoritmo de busca linear para encontrar o maior elemento do array.

// Passo a passo da busca linear
// - Comece assumindo que o primeiro elemento é o maior (12).
// - Índice 1 → valor = 5 → não é maior que 12.
// - Índice 2 → valor = 8 → não é maior que 12.
// - Índice 3 → valor = 20 → maior que 12 → atualiza maior = 20.
// - Índice 4 → valor = 15 → não é maior que 20.
// - Índice 5 → valor = 7 → não é maior que 20.
// - Índice 6 → valor = 30 → maior que 20 → atualiza maior = 30.

// Resposta: O maior elemento do array é 30.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (>)

// Complexidade de tempo (Big O):
// O algoritmo percorre todos os elementos do array uma vez.
// No pior caso, ele precisa visitar todos os n elementos.
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" executa até arr.length vezes,
// e cada iteração realiza apenas operações constantes (comparação e atribuição).

// Implementação da função:
function searchTheBigElement(arr) {
  let bigElement = arr[0]; // assume o primeiro como maior
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > bigElement) {
      bigElement = arr[i]; // atualiza se encontrar um maior
    }
  }
  return `O maior número do array é ${bigElement}`;
}

console.log(searchTheBigElement(arr)); // O maior número do array é 30
