// =============================================================================
// EXERCÍCIO 9: Busca Linear de Valor Mínimo
// Objetivo: Encontrar o menor número em um array desordenado.
// =============================================================================

let numeros = [45, 12, 89, 7, 33, 21];

// Passo a passo lógico:
// - Criamos uma variável 'min' iniciando com o primeiro elemento (45).
// - Percorremos o array a partir do índice 1.
// - Se o elemento atual for MENOR que 'min', atualizamos 'min'.
// - Ao final do loop, teremos percorrido todos os n elementos.

// Complexidade de tempo (Big O):
// O(n) - Pois é obrigatório verificar cada item para garantir que é o menor.

function acharMinimo(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return `O menor número do array é ${min}`;
}
console.log("Menor valor:", acharMinimo(numeros)); // Esperado: 7


function acharMinimoMath(arr) {
  return `O menor número do array é ${Math.min(...arr)}`;
}

console.log("Menor valor usando Math:", acharMinimoMath(numeros)); // Esperado: 7
