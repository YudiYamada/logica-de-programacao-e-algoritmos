/*
 * 🔍 EXERCÍCIO DE BUSCA BINÁRIA (CENÁRIO DE SUCESSO)
 *
 * Objetivo: Encontrar um elemento que EXISTE no array,
 * mostrando como o algoritmo retorna corretamente o índice.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Array Ordenado (tamanho ímpar) e Alvo 25 (que está na lista).
// PRÉ-CONDIÇÃO: O array está ordenado!
let arr = [5, 12, 25, 30, 41, 58, 70];
let target = 25; // Este alvo EXISTE.

/*
 * 2. SIMULAÇÃO PASSO A PASSO (Sucesso)
 *
 * Ponteiros usados: 'start', 'end' e 'mid'.
 *
 * Array: [5, 12, 25, 30, 41, 58, 70] | Índices: [0, 1, 2, 3, 4, 5, 6]
 *
 * Passo 1: start=0, end=6. mid = 3. Valor: 30.
 *    - 30 > 25? Sim. end recua para mid - 1 (2).
 *    - Novo intervalo: [5, 12, 25] (Índices 0 a 2)
 *
 * Passo 2: start=0, end=2. mid = 1. Valor: 12.
 *    - 12 < 25? Sim. start avança para mid + 1 (2).
 *    - Novo intervalo: [25] (Índice 2)
 *
 * Passo 3: start=2, end=2. mid = 2. Valor: 25.
 *    - 25 === 25? Sim. 🎉 Encontrado no índice 2.
 */

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// Este cenário (sucesso) ainda é O(log n).
// Foram feitas 3 comparações até encontrar o alvo.

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Iterativa)
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `É ${true} que o número ${target} existe, e ele foi encontrado no índice ${mid}.`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `É ${false} que o número ${target} existe.`;
}

// =CASOS DE TESTE=

// Teste 1: Sucesso (Alvo 25) - Saída esperada: Índice 2
console.log("--- Teste 1 (Cenário de Sucesso) ---");
console.log(`Buscando ${target}:`);
console.log(binarySearch(arr, target));

// Teste 2: Falha (Alvo 100, que não existe) - Saída esperada: FALHA
console.log("\n--- Teste 2 (Cenário de Falha) ---");
console.log("Buscando 100:");
console.log(binarySearch(arr, 100));
