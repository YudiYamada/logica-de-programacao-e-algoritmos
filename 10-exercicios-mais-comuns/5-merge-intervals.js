// Exercício: Merge Intervals
// Problema: Dada uma lista de intervalos, mescle todos os intervalos sobrepostos
// e retorne uma lista de intervalos não sobrepostos que cubram todas as entradas.

// Exemplo:
// intervals = [[1,3],[2,6],[8,10],[15,18]]
// Saída esperada: [[1,6],[8,10],[15,18]]
// Explicação: Os intervalos [1,3] e [2,6] se sobrepõem, então são mesclados em [1,6].

// Passo a passo da solução:
// 1. Ordenar os intervalos pelo valor inicial.
// 2. Criar um array resultado vazio.
// 3. Iterar pelos intervalos:
//    - Se o resultado estiver vazio ou o último intervalo não se sobrepõe ao atual,
//      adicionamos o intervalo atual ao resultado.
//    - Caso contrário, mesclamos atualizando o fim do último intervalo no resultado
//      para o máximo entre o fim atual e o fim do último.
// 4. Retornar o array resultado.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Ordenação de arrays (sort)
// - Comparação de valores

// Complexidade de tempo (Big O):
// - Ordenação dos intervalos: O(n log n).
// - Iteração para mesclar: O(n).
// - Portanto, a solução completa é O(n log n).

// Implementação da função:
function merge(intervals) {
  if (intervals.length === 0) return [];

  // 1. Ordenar pelo início
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  // 2. Iterar pelos intervalos
  for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];
    let current = intervals[i];

    if (current[0] <= last[1]) {
      // Mesclar
      last[1] = Math.max(last[1], current[1]);
    } else {
      // Não sobrepõe, adiciona
      result.push(current);
    }
  }

  return result;
}

// Testes:
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // Saída: [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // Saída: [[1,5]]
console.log(
  merge([
    [1, 10],
    [2, 3],
    [4, 8],
  ])
); // Saída: [[1,10]]
console.log(merge([])); // Saída: []
