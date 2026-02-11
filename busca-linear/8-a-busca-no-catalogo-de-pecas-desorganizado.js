/*
 * 🔎 EXERCÍCIO DE BUSCA LINEAR (BUSCA SEQUENCIAL)
 *
 * Cenário: A Busca no Catálogo de Peças Desorganizado
 * A busca linear é o método mais direto para encontrar um elemento em uma lista
 * não ordenada. Você verifica cada item sequencialmente, do início ao fim,
 * até encontrar o alvo.
 */

// =========================================================================
// 1. O PROBLEMA
// Dado o seguinte vetor (array) de códigos de peças, encontre o código 23.
let arr = [15, 8, 42, 4, 16, 23, 99];
let target = 23;

/*
 * 2. SIMULAÇÃO PASSO A PASSO
 *
 * - Índice 0 → valor = 15 → 15 !== 23
 * - Índice 1 → valor = 8  → 8  !== 23
 * - Índice 2 → valor = 42 → 42 !== 23
 * - Índice 3 → valor = 4  → 4  !== 23
 * - Índice 4 → valor = 16 → 16 !== 23
 * - Índice 5 → valor = 23 → 23 === 23  (Achou!)
 * - A busca para no Índice 5.
 */

/*
 * 3. ANÁLISE DE COMPLEXIDADE
 *
 * Assuntos Necessários: Estruturas de repetição (for), Condicionais (if), Retorno Imediato.
 *
 * Complexidade de Tempo (Big O):
 * O algoritmo depende linearmente do tamanho da lista.
 * - Melhor Caso: O(1) (Alvo é o primeiro elemento).
 * - Pior Caso: O(n) (Alvo não existe ou está no final).
 */

// =========================================================================
// 4. IMPLEMENTAÇÃO DA FUNÇÃO
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `O número ${arr[i]} foi encontrado no índice ${[i]}`;
    }
  }

  return `Número ${target} não encontrado`;
}

// =CASOS DE TESTE=

// Teste 1: Alvo presente (23) - Saída esperada: Índice 5
console.log("--- Teste 1 ---");
console.log(`Buscando ${target}:`);
console.log(linearSearch(arr, target));
// Resultado no console: SUCESSO: O código 23 foi encontrado no índice 5.

// Teste 2: Alvo inexistente (55) - Saída esperada: FALHA
console.log("\n--- Teste 2 ---");
console.log("Buscando 55:");
console.log(linearSearch(arr, 55));
// Resultado no console: FALHA: Número 55 não encontrado no catálogo.
