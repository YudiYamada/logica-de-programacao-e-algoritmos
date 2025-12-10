// Exercício: Somar todos os elementos de um array usando reduce

// Dado o vetor:
let numeros = [1, 2, 3, 4, 10, 11];

// Objetivo:
// Criar uma função que receba um array de números inteiros
// e retorne a soma de todos os elementos.

// Passo a passo do reduce
// - Valor inicial: define o ponto de partida do acumulador (nesse caso, 0).
// - Função acumuladora: recebe o acumulador (acc) e o elemento atual (n).
// - Atualização: soma o elemento atual ao acumulador.
// - Resultado final: ao final das iterações, o acumulador terá o valor total da soma.

// Resposta esperada:
// 31 (pois 1+2+3+4+10+11 = 31)

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: vetores/arrays
// - Funções de ordem superior: reduce
// - Funções anônimas (arrow functions)
// - Conceito de acumulador
// - Valor inicial no reduce

// Complexidade de tempo (Big O):
// - O(n), pois percorre todos os elementos uma vez.
// Complexidade de espaço:
// - O(1), pois não usa estruturas auxiliares significativas.

// Implementação da função (versão simples e didática):
function simpleArraySum(numeros) {
  const soma = numeros.reduce((acc, numeros) => acc + numeros, 0);
  return soma;
}

// Testando
console.log("Array original:", numeros);
console.log("Soma dos elementos:", simpleArraySum(numeros));
