/*
 * 🔍 EXERCÍCIO DE BUSCA BINÁRIA (VERSÃO RECURSIVA)
 *
 * Objetivo: Implementar a busca binária usando recursão.
 * Cenário: Procurar o número 58 em um array ordenado.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Array Ordenado e Alvo 58 (que existe).
// PRÉ-CONDIÇÃO: O array está ordenado!
let arr = [5, 12, 25, 30, 41, 58, 70];
let target = 58; // Este alvo EXISTE.

/*
 * 2. SIMULAÇÃO PASSO A PASSO (Sucesso com Recursão)
 *
 * Array: [5, 12, 25, 30, 41, 58, 70] | Índices: [0, 1, 2, 3, 4, 5, 6]
 *
 * Passo 1: start=0, end=6. mid=3 → valor=30.
 *    - 30 < 58 → chamada recursiva para [41, 58, 70] (índices 4 a 6).
 *
 * Passo 2: start=4, end=6. mid=5 → valor=58.
 *    - 58 === 58 → 🎉 Encontrado no índice 5.
 */

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// Tempo: O(log n).
// Espaço: O(log n) devido às chamadas recursivas na pilha.

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Recursiva)
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return `É ${false} que o número ${target} existe.`;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return `É ${true} que o número ${target} existe, e ele está no índice ${mid}`;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// =CASOS DE TESTE=

// Teste 1: Sucesso (Alvo 58)
console.log("--- Teste 1 (Cenário de Sucesso com Recursão) ---");
console.log(`Buscando ${target}:`);
console.log(binarySearchRecursive(arr, target));

// Teste 2: Falha (Alvo 99, que não existe)
console.log("\n--- Teste 2 (Cenário de Falha com Recursão) ---");
console.log("Buscando 99:");
console.log(binarySearchRecursive(arr, 99));
