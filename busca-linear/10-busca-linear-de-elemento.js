// Objetivo: Verificar se um número existe dentro de um array desordenado e retornar seu índice.

// Array de exemplo
let numeros = [45, 12, 89, 7, 33, 21];

// Passo a passo lógico:
// - Percorremos o array do índice 0 até o final.
// - Se o elemento atual for IGUAL ao valor buscado, retornamos o índice.
// - Se não encontrarmos, retornamos -1 (indicando que não existe).

// Complexidade de tempo (Big O):
// O(n) - Pois é necessário verificar cada item até encontrar ou chegar ao fim.

function buscaLinear(arr, valor) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === valor) {
      return i;
    }
  }

  return -1;
}

// Testando
console.log("Índice do 33:", buscaLinear(numeros, 33)); // Esperado: 4
console.log("Índice do 100:", buscaLinear(numeros, 100)); // Esperado: -1

// Variação com includes

function existeValor(arr, valor) {
  return arr.includes(valor);
}

console.log("Existe o número 7?", existeValor(numeros, 7));   // true
console.log("Existe o número 100?", existeValor(numeros, 100)); // false
