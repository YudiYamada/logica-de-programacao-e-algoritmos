/*
 * 🔍 EXERCÍCIO DE BUBBLE SORT (CENÁRIO DE SUCESSO)
 *
 * Objetivo: Ordenar um array desordenado,
 * mostrando como o algoritmo realiza as trocas até chegar ao resultado final.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Array Desordenado (tamanho ímpar).
// PRÉ-CONDIÇÃO: O algoritmo deve comparar e trocar elementos adjacentes.
let arr = [5, 1, 4, 2, 8]; // Array desordenado

/*
 * 2. SIMULAÇÃO PASSO A PASSO (Sucesso)
 *
 * Laços usados: 'i' (passagens) e 'j' (comparações adjacentes).
 *
 * Array inicial: [5, 1, 4, 2, 8]
 *
 * Passo 1 (i=0):
 *   - Compara 5 e 1 → troca → [1, 5, 4, 2, 8]
 *   - Compara 5 e 4 → troca → [1, 4, 5, 2, 8]
 *   - Compara 5 e 2 → troca → [1, 4, 2, 5, 8]
 *   - Compara 5 e 8 → não troca → [1, 4, 2, 5, 8]
 *   → Maior elemento (8) já está na posição final.
 *
 * Passo 2 (i=1):
 *   - Compara 1 e 4 → não troca → [1, 4, 2, 5, 8]
 *   - Compara 4 e 2 → troca → [1, 2, 4, 5, 8]
 *   - Compara 4 e 5 → não troca → [1, 2, 4, 5, 8]
 *
 * Passo 3 (i=2):
 *   - Compara 1 e 2 → não troca → [1, 2, 4, 5, 8]
 *   - Compara 2 e 4 → não troca → [1, 2, 4, 5, 8]
 *
 * Passo 4 (i=3):
 *   - Compara 1 e 2 → não troca → [1, 2, 4, 5, 8]
 *
 * Resultado Final: [1, 2, 4, 5, 8] 🎉
 */

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// O Bubble Sort tem complexidade O(n²) no pior e caso médio.
// No melhor caso (array já ordenado), pode ser O(n).
// Neste exemplo, foram feitas várias comparações e trocas até ordenar o array.

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Iterativa)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {                 // percorre o array várias vezes
    for (let j = 0; j < n - i - 1; j++) {       // compara elementos adjacentes
      if (arr[j] > arr[j + 1]) {                // se estão fora de ordem
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // troca usando destructuring
      }
    }
  }
  return arr;
}

// =CASOS DE TESTE=

// Teste 1: Sucesso (Array desordenado) - Saída esperada: [1, 2, 4, 5, 8]
console.log("--- Teste 1 (Cenário de Sucesso) ---");
console.log("Ordenando [5, 1, 4, 2, 8]:");
console.log(bubbleSort([5, 1, 4, 2, 8]));

// Teste 2: Melhor caso (Array já ordenado) - Saída esperada: [1, 2, 3, 4, 5]
console.log("\n--- Teste 2 (Melhor Caso) ---");
console.log("Ordenando [1, 2, 3, 4, 5]:");
console.log(bubbleSort([1, 2, 3, 4, 5]));