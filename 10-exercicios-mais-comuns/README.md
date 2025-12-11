### 1️⃣ Two Sum (Soma de Dois)

**Objetivo:** Encontrar os índices de dois números que somados resultam no `target`.

```javascript
function twoSum(nums, target) {
  const mapa = new Map(); // Cria um Hash Map para guardar { valor: índice }

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i]; // O número que falta para chegar no alvo

    // Se o complemento já existe no mapa, achamos o par!
    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i];
    }

    // Se não, guarda o número atual e seu índice para ser achado depois
    mapa.set(nums[i], i);
  }
  
  return []; // Retorno padrão caso não ache nada
}

// Exemplo
console.log(twoSum([2, 7, 11, 15], 9)); // Saída: [0, 1] (pois 2 + 7 = 9)
```

**🔍 Explicação:**
Em vez de usar dois loops (um dentro do outro) que seria lento ($O(n^2)$), usamos a memória (**Map**) para "lembrar" dos números que já vimos.

  * Para cada número `x`, perguntamos: *"Já vi o número que somado a `x` dá o `target`?"*
  * Se sim, retornamos os índices. Se não, guardamos `x` e seguimos.

**⏱️ Complexidade:** $O(n)$ tempo | $O(n)$ espaço.

-----

### 2️⃣ Maximum Subarray (Algoritmo de Kadane)

**Objetivo:** Achar a maior soma possível de um "pedaço" contínuo do array.

```javascript
function maxSubArray(nums) {
  let maxAtual = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // A decisão mágica:
    // Vale mais a pena continuar somando com o anterior (maxAtual + nums[i])
    // OU começar uma nova soma do zero a partir de agora (nums[i])?
    maxAtual = Math.max(nums[i], maxAtual + nums[i]);
    
    // Atualiza o recorde global se o atual for maior
    if (maxAtual > maxGlobal) {
      maxGlobal = maxAtual;
    }
  }

  return maxGlobal;
}

// Exemplo
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Saída: 6 (parte: [4, -1, 2, 1])
```

**🔍 Explicação:**
Este é o clássico algoritmo de **Kadane**. A lógica é: se a soma que venho trazendo se tornou negativa ou muito baixa a ponto de me atrapalhar, eu descarto o passado e começo uma nova soma a partir do número atual.

  * `maxAtual`: O melhor que consigo fazer terminando na posição atual.
  * `maxGlobal`: O recorde absoluto encontrado até agora.

**⏱️ Complexidade:** $O(n)$ tempo | $O(1)$ espaço.

-----

### 3️⃣ Valid Parentheses (Parênteses Válidos)

**Objetivo:** Verificar se a ordem de fechamento `()`, `[]`, `{}` está correta.

```javascript
function isValid(s) {
  const pilha = [];
  const mapa = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    // Se for um caractere de abertura, empilha
    if (mapa[char]) {
      pilha.push(char);
    } else {
      // Se for fechamento, verifica quem está no topo da pilha
      const ultimoAberto = pilha.pop();
      
      // Se a pilha estava vazia OU o par não bate, é inválido
      if (mapa[ultimoAberto] !== char) {
        return false;
      }
    }
  }

  // Só é válido se a pilha estiver vazia no final (tudo foi fechado)
  return pilha.length === 0;
}

// Exemplo
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
```

**🔍 Explicação:**
Imagine uma pilha de pratos. O último prato colocado (último parêntese aberto) deve ser o primeiro a ser lavado (primeiro a ser fechado). Isso é **LIFO** (Last In, First Out).

  * Encontrou abertura `(`? Joga na pilha.
  * Encontrou fechamento `)`? Tira o último da pilha e vê se é o par dele.

**⏱️ Complexidade:** $O(n)$ tempo | $O(n)$ espaço (pior caso: tudo abertura).

-----

Aqui estão os códigos explicados para os três exercícios que você selecionou. Eles cobrem **Pilha (Stack)**, **Ordenação/Arrays** e **Busca Binária Avançada**.

-----

### 4️⃣ Balanced Parentheses (Parênteses Balanceados)

**Conceito:** Uso de Pilha (LIFO - Last In, First Out). O último a abrir deve ser o primeiro a fechar.

```javascript
function isValid(s) {
  // Mapa para relacionar fechamento com sua abertura correspondente
  const pares = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  const pilha = [];

  for (let char of s) {
    // Se o char for um fechamento (está nas chaves do objeto pares)
    if (char in pares) {
      // Pega o topo da pilha. Se vazia, atribui um valor dummy '#'
      const topoElemento = pilha.length > 0 ? pilha.pop() : '#';
      
      // Verifica se o topo corresponde à abertura correta
      if (topoElemento !== pares[char]) {
        return false;
      }
    } else {
      // Se for abertura, empilha
      pilha.push(char);
    }
  }

  // Retorna true apenas se a pilha estiver vazia (todos foram fechados)
  return pilha.length === 0;
}

// Testes
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("{[]}"));   // true
```

**🔍 Explicação:**

1.  Iteramos pela string caractere por caractere.
2.  Se encontramos uma **abertura** (`(`, `{`, `[`), colocamos na pilha.
3.  Se encontramos um **fechamento**, olhamos para o último item adicionado na pilha.
4.  Se o par bater (ex: `}` fecha `{`), removemos o item da pilha e continuamos. Se não bater, a string é inválida.
5.  No final, se sobrou algo na pilha, significa que algo ficou aberto.

**⏱️ Complexidade:** $O(n)$ tempo | $O(n)$ espaço.

-----

### 5️⃣ Merge Intervals (Mesclar Intervalos)

**Conceito:** Ordenação + Iteração linear. O segredo é ordenar os intervalos pelo início primeiro.

```javascript
function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  // 1. Passo CRUCIAL: Ordenar pelo tempo de início (start)
  // Complexidade da ordenação: O(n log n)
  intervals.sort((a, b) => a[0] - b[0]);

  const resultado = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const intervaloAtual = intervals[i];
    const ultimoMesclado = resultado[resultado.length - 1];

    // Verifica sobreposição:
    // Se o início do atual é menor ou igual ao fim do último mesclado
    if (intervaloAtual[0] <= ultimoMesclado[1]) {
      // Há sobreposição! Atualizamos o fim do último mesclado
      // Escolhemos o maior valor entre os dois finais para cobrir tudo
      ultimoMesclado[1] = Math.max(ultimoMesclado[1], intervaloAtual[1]);
    } else {
      // Não há sobreposição, adiciona o intervalo atual como novo
      resultado.push(intervaloAtual);
    }
  }

  return resultado;
}

// Teste
// Intervalos: [1,3], [2,6], [8,10], [15,18]
// [1,3] e [2,6] se tocam. Novo intervalo: [1,6]
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); 
// Saída: [[1,6],[8,10],[15,18]]
```

**🔍 Explicação:**

1.  **Ordenação:** Sem ordenar, não conseguimos mesclar em uma única passada.
2.  Criamos um array `resultado` e colocamos o primeiro intervalo lá.
3.  Comparação: Olhamos sempre para o **último intervalo adicionado** no resultado e comparamos com o intervalo atual do loop.
4.  **Lógica de Mesclagem:** Se `inicio_atual <= fim_ultimo`, eles se sobrepõem. O novo fim será o `max(fim_ultimo, fim_atual)`.

**⏱️ Complexidade:** $O(n \log n)$ tempo (devido ao `.sort`) | $O(n)$ espaço.

-----

### 6️⃣ Search in Rotated Sorted Array (Busca em Array Rotacionado)

**Conceito:** Busca Binária com verificação de "qual lado está ordenado".

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // O array está dividido em duas partes, mas uma metade SEMPRE estará ordenada.
    
    // CASO 1: A metade ESQUERDA está ordenada?
    if (nums[left] <= nums[mid]) {
      // O target está dentro desse range ordenado?
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Vai para a esquerda
      } else {
        left = mid + 1;  // Vai para a direita (lado bagunçado ou maior)
      }
    } 
    // CASO 2: A metade DIREITA está ordenada?
    else {
      // O target está dentro desse range ordenado?
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Vai para a direita
      } else {
        right = mid - 1; // Vai para a esquerda
      }
    }
  }

  return -1; // Não encontrado
}

// Teste
// Array original: [0, 1, 2, 4, 5, 6, 7]
// Rotacionado no índice 3: [4, 5, 6, 7, 0, 1, 2]
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Saída: 4 (índice do valor 0)
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Saída: -1
```

**🔍 Explicação:**
Em uma busca binária normal, sabemos que se `alvo < meio`, vamos para a esquerda. Aqui, por causa da rotação, isso nem sempre é verdade.

1.  Calculamos o `mid`.
2.  Verificamos: **Qual metade é contínua (ordenada)?**
      * Se `nums[left] <= nums[mid]`, a esquerda é confiável.
      * Senão, a direita é a confiável.
3.  Se a esquerda é ordenada, verificamos se o `target` está **dentro** desse intervalo (`left` até `mid`). Se estiver, cortamos a direita. Se não, cortamos a esquerda.
4.  Repetimos a lógica para o lado oposto.

**⏱️ Complexidade:** $O(\log n)$ tempo | $O(1)$ espaço.

-----

Aqui estão os códigos e explicações para os três exercícios mais avançados. Estes problemas testam estruturas de dados mais complexas (Deque, Hash Map ordenado e Buckets) e otimizações de performance.

-----

### 7️⃣ Sliding Window Maximum (Máximo na Janela Deslizante)

**Objetivo:** Encontrar o maior número dentro de uma "janela" de tamanho `k` que desliza pelo array.
**Desafio:** A solução ingênua (verificar o máximo a cada passo) custa $O(N \cdot K)$. Precisamos de $O(N)$.

**Solução:** Usamos um **Deque (Fila de Duas Pontas)** Monotônico. Armazenamos apenas *índices* de elementos que são **candidatos** a serem o máximo. A fila sempre estará ordenada de forma decrescente (o maior valor sempre na frente).

```javascript
function maxSlidingWindow(nums, k) {
  const resultado = [];
  const deque = []; // Armazena ÍNDICES, não valores

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove índices que já saíram da janela atual (ficaram para trás)
    // O índice na frente do deque deve estar entre [i - k + 1, i]
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // 2. Remove elementos do final do deque que são MENORES que o atual
    // (Eles nunca serão o máximo, pois o atual é maior e mais recente)
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Adiciona o índice atual
    deque.push(i);

    // 4. O primeiro elemento do deque é sempre o maior da janela atual
    // Começamos a gravar resultados quando a primeira janela estiver completa (i >= k - 1)
    if (i >= k - 1) {
      resultado.push(nums[deque[0]]);
    }
  }

  return resultado;
}

// Teste
// Janelas: [1,3,-1], [3,-1,-3], [-1,-3,5], [-3,5,3], [5,3,6], [3,6,7]
// Máximos:    3,         3,         5,        5,       6,       7
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); 
// Saída: [3, 3, 5, 5, 6, 7]
```

**🔍 Explicação:**

  * Mantemos o `deque` "limpo":
      * Tiramos da frente o que ficou "velho" (fora da janela).
      * Tiramos de trás o que é "fraco" (menor que o número que acabou de entrar).
  * Isso garante que `deque[0]` seja sempre o índice do maior número da janela atual.

**⏱️ Complexidade:** $O(N)$ tempo (cada elemento entra e sai do deque apenas uma vez) | $O(k)$ espaço (tamanho do deque).

-----

### 8️⃣ LRU Cache Implementation (Cache Menos Recentemente Usado)

**Objetivo:** Criar uma classe de cache com capacidade limitada. Se encher, remove o item que não é acessado há mais tempo.
**Desafio:** `get` e `put` devem ser **$O(1)$**.

**Solução:** Em JavaScript, o objeto `Map` mantém a **ordem de inserção**. Podemos abusar disso\!

  * Quando acessamos (`get`) ou atualizamos (`put`) um item, nós o deletamos e inserimos novamente. Isso joga ele para o **final** do Map (o torna o "mais recente").
  * O primeiro item do Map (`Map.keys().next()`) será sempre o **menos recente** (LRU).

<!-- end list -->

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Map mantém ordem de inserção no JS
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const valor = this.cache.get(key);
    
    // TRUQUE: Deletar e setar novamente move o item para o FINAL (mais recente)
    this.cache.delete(key);
    this.cache.set(key, valor);
    
    return valor;
  }

  put(key, value) {
    // Se já existe, deletamos para atualizar e mover para o final
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    // Adiciona o novo valor (vai para o final -> mais recente)
    this.cache.set(key, value);

    // Se estourou a capacidade, remove o PRIMEIRO item (o mais antigo/LRU)
    if (this.cache.size > this.capacity) {
      // keys().next().value pega a primeira chave inserida
      const chaveMenosUsada = this.cache.keys().next().value;
      this.cache.delete(chaveMenosUsada);
    }
  }
}

// Teste
const lru = new LRUCache(2);
lru.put(1, 1); // Cache: {1=1}
lru.put(2, 2); // Cache: {1=1, 2=2}
console.log(lru.get(1)); // Retorna 1. Cache atualizado: {2=2, 1=1} (1 foi pro final)
lru.put(3, 3); // Capacidade cheia! Remove o 2 (menos usado). Cache: {1=1, 3=3}
console.log(lru.get(2)); // Retorna -1 (não existe mais)
```

**⏱️ Complexidade:** $O(1)$ para ambas as operações.
*Nota:* Em linguagens sem Map ordenado (como Java/C++ antigos), você implementaria isso manualmente com um *Hash Map* apontando para nós de uma *Lista Duplamente Ligada*.

-----

### 9️⃣ Top K Frequent Elements (K Elementos Mais Frequentes)

**Objetivo:** Retornar os `k` elementos que mais aparecem no array.
**Desafio:** Fazer melhor que $O(N \log N)$.

**Solução:** **Bucket Sort** (Ordenação por Baldes).

1.  Contamos a frequência de cada número (Map).
2.  Criamos um array de "baldes", onde o **índice** representa a **frequência**.
3.  Preenchemos os baldes e depois percorremos de trás para frente (maior frequência) até achar `k` elementos.

<!-- end list -->

```javascript
function topKFrequent(nums, k) {
  const mapa = new Map();
  
  // 1. Contar frequências
  for (let n of nums) {
    mapa.set(n, (mapa.get(n) || 0) + 1);
  }

  // 2. Criar baldes. O tamanho é nums.length + 1 (freq max possível é N)
  const baldes = Array.from({ length: nums.length + 1 }, () => []);

  // 3. Preencher baldes: índice = frequência, valor = lista de números
  for (let [num, freq] of mapa) {
    baldes[freq].push(num);
  }

  const resultado = [];

  // 4. Percorrer do fim (frequência mais alta) para o começo
  for (let i = baldes.length - 1; i >= 0; i--) {
    if (baldes[i].length > 0) {
      // Adiciona todos os números que têm essa frequência 'i'
      for (let n of baldes[i]) {
        resultado.push(n);
        if (resultado.length === k) return resultado;
      }
    }
  }
  
  return resultado;
}

// Teste
// 1 aparece 3x, 2 aparece 2x, 3 aparece 1x.
// Baldes ficariam: [ [], [3], [2], [1], ... ]
// Lendo do fim, pegamos o 1, depois o 2.
console.log(topKFrequent([1,1,1,2,2,3], 2)); 
// Saída: [1, 2]
```

**🔍 Explicação:**
Não precisamos ordenar os números ($O(N \log N)$). Como a frequência máxima de um número não pode ser maior que o tamanho do array ($N$), podemos usar essa limitação a nosso favor criando um array de tamanho fixo para agrupar os números.

**⏱️ Complexidade:** $O(N)$ tempo | $O(N)$ espaço.

-----


### 🔟 Binary Tree Traversals (Percursos em Árvore Binária)

**Objetivo:** Visitar cada nó da árvore uma única vez seguindo uma ordem específica.

#### Estrutura Básica do Nó (JavaScript)

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

-----

### 1️⃣ Preorder Traversal (Pré-Ordem)

**Ordem:** **Raiz** $\rightarrow$ Esquerda $\rightarrow$ Direita (R-E-D)

O nó raiz é visitado *antes* de seus filhos.

```javascript
function preorderTraversal(root) {
  const resultado = [];

  function traverse(node) {
    if (node === null) {
      return;
    }
    
    // 1. Visita a Raiz (R)
    resultado.push(node.val); 
    
    // 2. Visita a Esquerda (E)
    traverse(node.left);
    
    // 3. Visita a Direita (D)
    traverse(node.right);
  }

  traverse(root);
  return resultado;
}

// Exemplo:
// Árvore:    1
//           / \
//          2   3
//         / \
//        4   5
// Saída: [1, 2, 4, 5, 3]
```

**🔍 Explicação:**
Este percurso é usado tipicamente para **copiar uma árvore** ou **serializar** a estrutura, pois a raiz é a primeira informação a ser lida.

-----

### 2️⃣ Inorder Traversal (Em Ordem)

**Ordem:** Esquerda $\rightarrow$ **Raiz** $\rightarrow$ Direita (E-R-D)

O nó raiz é visitado *entre* seus filhos.

```javascript
function inorderTraversal(root) {
  const resultado = [];

  function traverse(node) {
    if (node === null) {
      return;
    }
    
    // 1. Visita a Esquerda (E)
    traverse(node.left);
    
    // 2. Visita a Raiz (R)
    resultado.push(node.val); 
    
    // 3. Visita a Direita (D)
    traverse(node.right);
  }

  traverse(root);
  return resultado;
}

// Exemplo:
// Árvore:    1
//           / \
//          2   3
//         / \
//        4   5
// Saída: [4, 2, 5, 1, 3]
// IMPORTANTE: Se for uma BST (Binary Search Tree), a saída será sempre ORDENADA.
```

**🔍 Explicação:**
Este é o percurso mais importante para uma **Árvore de Busca Binária (BST)**, pois ele retorna todos os elementos em ordem crescente (do menor para o maior).

-----

### 3️⃣ Postorder Traversal (Pós-Ordem)

**Ordem:** Esquerda $\rightarrow$ Direita $\rightarrow$ **Raiz** (E-D-R)

O nó raiz é visitado *após* seus filhos.

```javascript
function postorderTraversal(root) {
  const resultado = [];

  function traverse(node) {
    if (node === null) {
      return;
    }
    
    // 1. Visita a Esquerda (E)
    traverse(node.left);
    
    // 2. Visita a Direita (D)
    traverse(node.right);

    // 3. Visita a Raiz (R)
    resultado.push(node.val); 
  }

  traverse(root);
  return resultado;
}

// Exemplo:
// Árvore:    1
//           / \
//          2   3
//         / \
//        4   5
// Saída: [4, 5, 2, 3, 1]
```

**🔍 Explicação:**
Este percurso é usado tipicamente para **deletar nós** na árvore, pois você processa primeiro os nós folha, garantindo que os filhos sejam removidos antes de tentar remover a raiz.

-----

### ⏱️ Complexidade Comum aos 3 Percursos

Como cada um dos três percursos visita cada nó da árvore **exatamente uma vez**:

  * **Complexidade de Tempo:** $O(N)$, onde $N$ é o número de nós.
  * **Complexidade de Espaço:** $O(H)$, onde $H$ é a altura da árvore. Isso se deve à profundidade da pilha de chamadas da recursão. No pior caso (árvore desbalanceada como uma lista ligada), $H=N$, então o espaço é $O(N)$.
