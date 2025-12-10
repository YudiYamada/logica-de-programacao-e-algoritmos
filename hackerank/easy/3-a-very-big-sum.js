// Exercício: Somar números muito grandes (A Very Big Sum)

// Dado o vetor:
let numerosGrandes = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];

// Objetivo:
// Criar uma função que receba um array de números inteiros muito grandes
// e retorne a soma de todos os elementos.
// Esse exercício é parecido com o Simple Array Sum, mas os valores podem ser enormes,
// exigindo atenção ao tipo de dado.

// Passo a passo:
// - Valor inicial: define o ponto de partida do acumulador (nesse caso, 0).
// - Função acumuladora: recebe o acumulador (acc) e o elemento atual (n).
// - Atualização: soma o elemento atual ao acumulador.
// - Resultado final: ao final das iterações, o acumulador terá o valor total da soma.

// Resposta esperada:
// 5000000015 (pois 1000000001 + 1000000002 + 1000000003 + 1000000004 + 1000000005)

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções de ordem superior: reduce
// - Funções anônimas (arrow functions)
// - Conceito de acumulador
// - Valor inicial no reduce
// - Tipos numéricos em JavaScript (Number suporta até 2^53 - 1 com precisão)

// Complexidade de tempo (Big O):
// - O(n), pois percorre todos os elementos uma vez.
// Complexidade de espaço:
// - O(1), pois não usa estruturas auxiliares significativas.

// Implementação da função (versão simples e didática):
function aVeryBigSum(arr) {
  return arr.reduce((acc, n) => acc + n, 0); // soma acumulada
}

// Testando
console.log("Array original:", numerosGrandes);
console.log("Soma dos elementos:", aVeryBigSum(numerosGrandes));
