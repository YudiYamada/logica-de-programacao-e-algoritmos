// Objetivo: Encontrar o maior número em um array desordenado.

// Array de exemplo
let numeros = [45, 12, 89, 7, 33, 21];

// Passo a passo lógico:
// - Criamos uma variável 'max' iniciando com o primeiro elemento.
// - Percorremos o array a partir do índice 1.
// - Se o elemento atual for MAIOR que 'max', atualizamos 'max'.
// - Ao final do loop, teremos percorrido todos os n elementos.

// Complexidade de tempo (Big O):
// O(n) - Pois é obrigatório verificar cada item para garantir que é o maior.

function acharMaximo(arr) {
  let max = arr[0];

  for(let i = 1; i < arr.length - 1 ; i++) {
    if(max < arr[i]) return max = arr[i]
  }

  return max
}

// Testando
console.log("Maior valor:", acharMaximo(numeros)); // Esperado: 89
