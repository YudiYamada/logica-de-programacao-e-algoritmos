// Exercício encontrar o primeiro elemento negativo

// Dado o vetor:

let arr = [12, 5, -8, 20, -15, 7, -30];

// Use o algoritmo de busca linear para encontrar o índice do primeiro elemento negativo.

// Passo a passo da busca linear
// - Índice 0 → valor = 12 → Não é negativo.
// - Índice 1 → valor = 5 → Não é negativo.
// - Índice 2 → valor = -8 → É negativo! → achou!
// - A busca para imediatamente ao encontrar o primeiro.

// Resposta: O índice retornado é 2, pois -8 é o primeiro elemento negativo.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Estruturas de repetição: for
// - Condicionais: if
// - Comparação de valores (< 0)
// - Retorno imediato

// Complexidade de tempo (Big O):
// O algoritmo percorre o array elemento por elemento até encontrar o primeiro alvo (negativo) ou chegar ao fim.
// No **melhor caso** (o primeiro elemento é o alvo), é O(1).
// No **pior caso** (o alvo não existe ou está no final), é O(n).
// Como a função pode parar antes, ela é mais eficiente que um laço que percorre o array inteiro (como no cálculo da soma ou do maior elemento).
// Por isso, a notação Big O é O(n), onde n é o tamanho do array.
// Identificação: feita observando que o laço "for" pode executar até arr.length vezes.

// Implementação da função:
function buscarPrimeiroNegativo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return `O primeiro número negativo é ${arr[i]}`;
  }
  return "Não existem números negativos no array";
}

let arrNegativos = [12, 5, -8, 20, -15, 7, -30];
console.log(buscarPrimeiroNegativo(arrNegativos));

let arrSemNegativos = [1, 5, 8, 20];
console.log(buscarPrimeiroNegativo(arrSemNegativos));
