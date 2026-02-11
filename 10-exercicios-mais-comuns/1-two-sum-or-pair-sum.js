// Exercício: Two Sum
// Problema: Dado um vetor de números inteiros e um alvo (target),
// encontre os índices de dois elementos cuja soma seja igual ao alvo.

// Exemplo:
// nums = [2, 7, 11, 15], target = 9
// Resposta esperada: [0, 1] porque nums[0] + nums[1] = 2 + 7 = 9

// Passo a passo da solução (usando Hash Map):
// 1. Criamos uma estrutura (objeto) para armazenar os números já vistos e seus índices.
// 2. Iteramos pelo array:
//    - Para cada número num, calculamos o complemento: complement = target - num.
//    - Verificamos se o complemento já foi visto antes.
//      → Se sim: retornamos os índices.
//      → Se não: armazenamos o número atual com seu índice.
// 3. Se nenhum par for encontrado, retornamos uma mensagem de erro.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays e objetos (Map ou {} em JS)
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Manipulação de índices
// - Operações matemáticas básicas (soma e subtração)

// Complexidade de tempo (Big O):
// - Cada elemento é percorrido uma única vez → O(n).
// - A busca no objeto é O(1).
// - Portanto, a solução completa é O(n).

// Implementação da função:
function twoSum(nums, target) {
  let map = {}; // armazena número → índice

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i]; // encontramos os índices
    }

    map[nums[i]] = i; // salva o índice do número atual
  }

  return "Nenhum par encontrado";
}

// Testes:
console.log(twoSum([2, 7, 11, 15], 9)); // Saída: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Saída: [1, 2]
console.log(twoSum([1, 5, 3], 10)); // Saída: Nenhum par encontrado
