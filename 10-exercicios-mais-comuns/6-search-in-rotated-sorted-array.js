// Exercício: Search in Rotated Sorted Array
// Problema: Dado um array ordenado em ordem crescente que foi rotacionado em um ponto desconhecido,
// e um alvo (target), encontre o índice do alvo. Se não existir, retorne -1.
// O array não contém elementos duplicados.

// Exemplo:
// nums = [4,5,6,7,0,1,2], target = 0
// Saída esperada: 4
// nums = [4,5,6,7,0,1,2], target = 3
// Saída esperada: -1

// Passo a passo da solução (busca binária adaptada):
// 1. Inicializamos início (start) e fim (end).
// 2. Enquanto start <= end:
//    - Calculamos mid = Math.floor((start + end) / 2).
//    - Se nums[mid] === target → retornamos mid.
//    - Caso contrário, verificamos qual metade está ordenada:
//      → Se nums[start] <= nums[mid], significa que a metade esquerda está ordenada.
//         - Se target está entre nums[start] e nums[mid], ajustamos end = mid - 1.
//         - Caso contrário, ajustamos start = mid + 1.
//      → Senão, significa que a metade direita está ordenada.
//         - Se target está entre nums[mid] e nums[end], ajustamos start = mid + 1.
//         - Caso contrário, ajustamos end = mid - 1.
// 3. Se não encontrar, retornamos -1.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays
// - Estruturas de repetição: while
// - Condicionais: if/else
// - Manipulação de índices (start, end, mid)
// - Comparação de valores

// Complexidade de tempo (Big O):
// - O algoritmo reduz o espaço de busca pela metade em cada etapa → O(log n).
// - Portanto, é eficiente mesmo em arrays grandes.

// Implementação da função:
function searchRotated(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Verifica se a metade esquerda está ordenada
    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // Metade direita está ordenada
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

// Testes:
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // Saída: 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // Saída: -1
console.log(searchRotated([1], 0)); // Saída: -1
console.log(searchRotated([6, 7, 8, 1, 2, 3, 4, 5], 3)); // Saída: 5
