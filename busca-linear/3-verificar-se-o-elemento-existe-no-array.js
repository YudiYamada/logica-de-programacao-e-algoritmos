// Exercício verificar se o elemento existe no array

// Dado o vetor:

let arr = [12, 5, 8, 20, 15, 7, 30];

// Use o algoritmo de busca linear para verificar se o elemento 15 existe no array.

// Passo a passo da busca linear
// - Índice 0 → valor = 12 → não é 15.
// - Índice 1 → valor = 5 → não é 15.
// - Índice 2 → valor = 8 → não é 15.
// - Índice 3 → valor = 20 → não é 15.
// - Índice 4 → valor = 15 → achou! → retorna true.

// Resposta: O elemento 15 existe no array.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (===)
// - Retorno booleano (true/false)

// Complexidade de tempo (Big O):
// O algoritmo percorre o array elemento por elemento até encontrar o alvo ou chegar ao fim.
// No pior caso, ele precisa verificar todos os n elementos do array.
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" pode executar até arr.length vezes,
// e cada iteração realiza apenas operações constantes (comparação).

// Implementação da função:
function existeElemento(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

console.log(existeElemento(arr, 15)); // true
console.log(existeElemento(arr, 99)); // false
