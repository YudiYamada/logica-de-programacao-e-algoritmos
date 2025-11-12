// Dado o vetor:

let arr = [12, 5, 8, 20, 15, 7, 30];

// Use o algoritmo de busca linear para encontrar o índice do elemento 15.

// Passo a passo da busca linear
// - Comece no índice 0 → valor = 12 → não é 15.
// - Índice 1 → valor = 5 → não é 15.
// - Índice 2 → valor = 8 → não é 15.
// - Índice 3 → valor = 20 → não é 15.
// - Índice 4 → valor = 15 → achou!

// Resposta: O índice retornado é 4 (lembrando que os índices começam em 0).

function buscarLinear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return `O elemento está no índice ${i}`;
  }
  return "Número não encontrado";
}

console.log(buscarLinear(arr, 15));
