// Exercício buscar todos os índices de um elemento

// Dado o vetor:

let arr = [4, 9, 2, 9, 7, 1, 9];

// Use o algoritmo de busca linear para encontrar todos os índices do elemento 9.

// Passo a passo da busca linear
// - Índice 0 → valor = 4 → não é 9.
// - Índice 1 → valor = 9 → achou!
// - Índice 2 → valor = 2 → não é 9.
// - Índice 3 → valor = 9 → achou!
// - Índice 4 → valor = 7 → não é 9.
// - Índice 5 → valor = 1 → não é 9.
// - Índice 6 → valor = 9 → achou!

// Resposta: O número 9 aparece nos índices 1, 3 e 6.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (===)
// - Manipulação de arrays (push, join)

// Complexidade de tempo (Big O):
// O algoritmo percorre todos os elementos do array para verificar se são iguais ao alvo.
// No pior caso, ele precisa visitar todos os n elementos do array.
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" executa até arr.length vezes,
// e cada iteração realiza apenas operações constantes (comparação e push).

// Implementação da função:
function buscarLinearTodos(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices.length > 0
    ? `O elemento aparece nos índices ${indices.join(", ")}`
    : "Número não encontrado";
}

console.log(buscarLinearTodos(arr, 9));
