// Exercício: Valid Anagram
// Problema: Dadas duas strings s e t, determine se t é um anagrama de s.
// Um anagrama é formado reorganizando todas as letras de uma palavra,
// usando exatamente as mesmas letras, apenas em ordem diferente.

// Exemplo:
// s = "listen", t = "silent" → true
// s = "rat", t = "car" → false

// Passo a passo da solução:
// 1. Verificar se as strings têm o mesmo tamanho.
//    → Se não tiverem, já retornamos false.
// 2. Contar a frequência de cada letra em s.
// 3. Subtrair a frequência de cada letra em t.
// 4. Se todas as frequências forem zero, então t é um anagrama de s.
//    Caso contrário, não é.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: strings e objetos (hash map)
// - Estruturas de repetição: for
// - Condicionais: if/else
// - Manipulação de caracteres
// - Comparação de valores

// Complexidade de tempo (Big O):
// - Percorremos as duas strings uma vez → O(n).
// - Espaço adicional para armazenar frequências → O(1) (limitado pelo alfabeto).
// - Portanto, a solução é eficiente: O(n).

// Implementação da função:
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char] -= 1;
  }

  return true;
}

// Testes:
console.log(isAnagram("listen", "silent")); // Saída: true
console.log(isAnagram("rat", "car")); // Saída: false
console.log(isAnagram("anagram", "nagaram")); // Saída: true
console.log(isAnagram("yudi", "iduy")); // Saída: true
