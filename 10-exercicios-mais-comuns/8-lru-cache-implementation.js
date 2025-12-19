// Exercício: LRU Cache Implementation
// Problema: Implemente uma estrutura de dados chamada LRU Cache (Least Recently Used).
// Ela deve suportar as operações:
// - get(key): retorna o valor associado à chave se existir, senão -1.
// - put(key, value): insere ou atualiza o valor da chave.
//   → Se a capacidade máxima for atingida, remove o item menos recentemente usado.

// Exemplo de uso:
// let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1)); // Saída: 1
// cache.put(3, 3); // Remove chave 2
// console.log(cache.get(2)); // Saída: -1
// cache.put(4, 4); // Remove chave 1
// console.log(cache.get(1)); // Saída: -1
// console.log(cache.get(3)); // Saída: 3
// console.log(cache.get(4)); // Saída: 4

// Passo a passo da solução:
// 1. Usamos um Map para armazenar os pares chave-valor.
// 2. O Map em JS mantém a ordem de inserção.
// 3. Quando acessamos (get), removemos e reinserimos a chave para marcar como "recentemente usada".
// 4. Quando inserimos (put):
//    - Se a chave já existe, removemos e reinserimos.
//    - Se a capacidade foi atingida, removemos o primeiro item (menos usado).
// 5. Assim, o Map sempre mantém os itens em ordem de uso.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: Map
// - Estruturas de repetição: for/of
// - Condicionais: if/else
// - Manipulação de chaves e valores
// - Conceito de cache e política LRU

// Complexidade de tempo (Big O):
// - get: O(1)
// - put: O(1)
// - Remoção do menos usado: O(1)
// → Muito eficiente para grandes volumes de dados.

// Implementação da classe:
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    // Atualiza ordem de uso
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Remove o menos recentemente usado (primeiro item)
      let firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

// Testes:
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Saída: 1
cache.put(3, 3); // Remove chave 2
console.log(cache.get(2)); // Saída: -1
cache.put(4, 4); // Remove chave 1
console.log(cache.get(1)); // Saída: -1
console.log(cache.get(3)); // Saída: 3
console.log(cache.get(4)); // Saída: 4
