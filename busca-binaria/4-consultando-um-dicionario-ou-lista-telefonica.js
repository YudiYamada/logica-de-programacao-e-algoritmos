/*
 * 🔍 EXERCÍCIO DE BUSCA BINÁRIA (BINARY SEARCH)
 *
 * Cenário: Consultando um Dicionário ou Lista Telefônica
 * A Busca Binária é drasticamente mais rápida que a Busca Linear, mas exige
 * uma pré-condição CRÍTICA: o vetor DEVE estar ordenado.
 *
 * Em vez de checar um por um, ela divide o espaço de busca pela metade a cada passo.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Dado o vetor ordenado e o alvo 70, encontre o índice usando Busca Binária.
// PRÉ-CONDIÇÃO: O array está ordenado!
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 70;

/*
 * 2. SIMULAÇÃO PASSO A PASSO
 *
 * A busca binária usa três ponteiros: 'start' (início), 'end' (fim) e 'mid' (meio).
 */

// Passo 1: start=0, end=7. mid = floor((0+7)/2) = 3. Valor: 40.
//    - 40 < 70? Sim. Descartamos a metade esquerda. start avança para mid + 1 (4).
//    - Novo intervalo: [50, 60, 70, 80]

// Passo 2: start=4, end=7. mid = floor((4+7)/2) = 5. Valor: 60.
//    - 60 < 70? Sim. Descartamos a metade esquerda. low avança para mid + 1 (6).
//    - Novo intervalo: [70, 80]

// Passo 3: start=6, end=7. mid = floor((6+7)/2) = 6. Valor: 70.
//    - 70 == 70? Sim. Achou!
//    - A busca para no Índice 6.

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// Assuntos Necessários: Arrays Ordenados, Algoritmo Divide and Conquer, Loops (while).
//
// Complexidade de Tempo (Big O):
// Por dividir a lista pela metade a cada iteração, a Busca Binária é logarítmica.
// - Melhor Caso: O(1) (Alvo é o elemento central).
// - Pior Caso: O(log n).
//
// O(log n) é extremamente rápido. Ex: Em uma lista de 1 bilhão (n=10^9), a Busca Binária
// fará no máximo cerca de 30 comparações (log base 2 de 1 bilhão é ~30).

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Iterativa)
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `O alvo ${target} foi encontrado! no índice ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `Número ${target} não encontrado!`;
}

// =CASOS DE TESTE=

// Teste 1: Alvo presente (70) - Saída esperada: Índice 6
console.log("--- Teste 1 (Sucesso) ---");
console.log(`Buscando ${target}:`);
console.log(binarySearch(arr, target));

// Teste 2: Alvo inexistente (45) - Saída esperada: FALHA
console.log("\n--- Teste 2 (Falha) ---");
console.log("Buscando 45:");
console.log(binarySearch(arr, 45));
