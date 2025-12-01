// Exercício contar elementos maiores que um valor

// Dado o vetor:

let arr = [12, 5, 8, 20, 15, 7, 30];

// Use o algoritmo de busca linear para contar quantos elementos são maiores que 10.

// Passo a passo da busca linear (Contagem)
// - Comece com contador = 0.
// - Índice 0 → valor = 12 → É maior que 10? Sim. Contador = 1.
// - Índice 1 → valor = 5 → É maior que 10? Não.
// - Índice 2 → valor = 8 → É maior que 10? Não.
// - Índice 3 → valor = 20 → É maior que 10? Sim. Contador = 2.
// - Índice 4 → valor = 15 → É maior que 10? Sim. Contador = 3.
// - Índice 5 → valor = 7 → É maior que 10? Não.
// - Índice 6 → valor = 30 → É maior que 10? Sim. Contador = 4.

// Resposta: Existem 4 elementos maiores que 10 no array (12, 20, 15, 30).

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (>)
// - Variáveis de acumulação (contador)

// Complexidade de tempo (Big O):
// O algoritmo deve percorrer todos os elementos do array para contar aqueles que atendem ao critério.
// No pior caso, ele precisa visitar todos os n elementos.
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" executa até arr.length vezes,
// e cada iteração realiza apenas operações constantes (comparação e incremento).

// Implementação da função:
function contarMaioresQue(arr, target) {
  bigElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) bigElement++;
  }
  return `O número de elementos que são maiores que ${target} bigElement é ${bigElement}`;
}

console.log(contarMaioresQue(arr, 10)); // Saída: Existem 4 elementos maiores que 10 no array.
console.log(contarMaioresQue(arr, 5)); // Saída: Existem 6 elementos maiores que 5 no array.
