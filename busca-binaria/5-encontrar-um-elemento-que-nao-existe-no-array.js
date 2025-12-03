/*
 * 🔍 EXERCÍCIO DE BUSCA BINÁRIA (CENÁRIO DE FALHA)
 *
 * Objetivo: Encontrar um elemento que NÃO EXISTE no array,
 * garantindo que o algoritmo pare corretamente quando 'start' > 'end'.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Array Ordenado (tamanho ímpar) e Alvo 35 (que não está na lista).
// PRÉ-CONDIÇÃO: O array está ordenado!
let arr = [5, 12, 25, 30, 41, 58, 70];
let target = 35; // Este alvo NÃO existe.

/*
 * 2. SIMULAÇÃO PASSO A PASSO (A Falha)
 *
 * Ponteiros usados: 'start', 'end' e 'mid'.
 */

// Array: [5, 12, 25, 30, 41, 58, 70] | Índices: [0, 1, 2, 3, 4, 5, 6]

// Passo 1: start=0, end=6. mid = 3. Valor: 30.
//    - 30 < 35? Sim. low avança para mid + 1 (4).
//    - Novo intervalo: [41, 58, 70] (Índices 4 a 6)

// Passo 2: start=4, end=6. mid = 5. Valor: 58.
//    - 58 > 35? Sim. high recua para mid - 1 (4).
//    - Novo intervalo: [41] (Índice 4)

// Passo 3: start=4, end=4. mid = 4. Valor: 41.
//    - 41 > 35? Sim. high recua para mid - 1 (3).
//    - Novo intervalo: Vazio. (start=4, end=3)

// Passo 4: O loop WHILE verifica: (start <= end) -> (4 <= 3) é FALSO.
//    - O loop termina. Retorna FALHA.

// Resposta: O número 35 não foi encontrado.

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// Este cenário (falha) é o Pior Caso (Worst Case) para a Busca Binária.
// Complexidade de Tempo: O(log n).
// O algoritmo ainda faz o número mínimo de comparações (4) para provar que o
// elemento não existe, demonstrando sua eficiência logarítmica.

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Iterativa)
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `É ${true} que o número ${target} existe, e ele está no índice ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `É ${false} que o número ${target} existe`;
}

// =CASOS DE TESTE=

// Teste 1: Falha (Alvo 35) - Saída esperada: FALHA
console.log("--- Teste 1 (Cenário de Falha) ---");
console.log(`Buscando ${target}:`);
console.log(binarySearch(arr, target));

// Teste 2: Sucesso (Alvo 41, que é o último 'mid' verificado) - Saída esperada: Índice 4
console.log("\n--- Teste 2 (Sucesso, elemento vizinho) ---");
console.log("Buscando 41:");
console.log(binarySearch(arr, 41));
