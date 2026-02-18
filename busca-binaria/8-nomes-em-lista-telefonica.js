/*
 * 🔍 EXERCÍCIO DE BUSCA BINÁRIA (BINARY SEARCH)
 *
 * Cenário: Procurando um nome em uma lista telefônica ordenada.
 * A Busca Binária funciona não apenas com números, mas também com strings,
 * desde que o array esteja ordenado.
 */

// =========================================================================
// 1. O PROBLEMA E PRÉ-CONDIÇÃO
// Dada a lista ordenada e o alvo "Carlos", encontre o índice usando Busca Binária.
// PRÉ-CONDIÇÃO: O array está ordenado!
let nomes = ["Ana", "Bruno", "Carlos", "Daniel", "Eduardo", "Fernanda"];
let alvo = "Carlos";

/*
 * 2. SIMULAÇÃO PASSO A PASSO
 *
 * A busca binária compara strings usando ordem lexicográfica (alfabética).
 */

// Passo 1: start=0, end=5. mid = floor((0+5)/2) = 2. Valor: "Carlos".
//    - "Carlos" == "Carlos"? Sim. Achou!
//    - A busca para no Índice 2.

// =========================================================================
// 3. ANÁLISE DE COMPLEXIDADE
//
// Complexidade de Tempo (Big O):
// - Melhor Caso: O(1) (Alvo é o elemento central).
// - Pior Caso: O(log n).
//
// A busca binária continua eficiente mesmo com strings, desde que ordenadas.

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO (Iterativa)
function binarySearchStrings(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `O ${target} existe e foi encontrado no índice ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return `O(a) ${target} não foi encontrado.`;
}

// =CASOS DE TESTE=

// Teste 1: Alvo presente ("Carlos") - Saída esperada: Índice 2
console.log("--- Teste 1 (Sucesso) ---");
console.log(binarySearchStrings(nomes, alvo));

// Teste 2: Alvo inexistente ("Mariana") - Saída esperada: FALHA
console.log("\n--- Teste 2 (Falha) ---");
console.log(binarySearchStrings(nomes, "Mariana"));
