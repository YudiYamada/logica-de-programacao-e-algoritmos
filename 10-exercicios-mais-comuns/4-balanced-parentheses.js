// Exercício: Balanced Parentheses / Valid Brackets
// Problema: Dada uma string contendo apenas os caracteres '(', ')', '{', '}', '[' e ']',
// determine se a string é válida.
// Uma string é válida se:
// 1. Os parênteses/brackets são fechados pelo mesmo tipo.
// 2. Os parênteses/brackets são fechados na ordem correta.

// Exemplos:
// s = "()" → true
// s = "()[]{}" → true
// s = "(]" → false
// s = "([)]" → false
// s = "{[]}" → true

// Passo a passo da solução (usando pilha):
// 1. Criamos uma pilha (array) para armazenar os caracteres de abertura.
// 2. Iteramos pela string:
//    - Se o caractere for de abertura ('(', '{', '['), empilhamos.
//    - Se for de fechamento (')', '}', ']'):
//      → Verificamos se o topo da pilha corresponde ao tipo correto.
//      → Se não corresponder ou a pilha estiver vazia, retornamos false.
//      → Caso contrário, desempilhamos.
// 3. No final, se a pilha estiver vazia, a string é válida. Caso contrário, inválida.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: arrays (usados como pilha)
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Manipulação de caracteres
// - Comparação de valores

// Complexidade de tempo (Big O):
// - Percorremos a string uma única vez → O(n).
// - Espaço adicional para a pilha → O(n).
// - Portanto, a solução é eficiente: O(n).

// Implementação da função:
function isValid(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// Testes:
console.log(isValid("()")); // Saída: true
console.log(isValid("()[]{}")); // Saída: true
console.log(isValid("(]")); // Saída: false
console.log(isValid("([)]")); // Saída: false
console.log(isValid("{[]}")); // Saída: true
