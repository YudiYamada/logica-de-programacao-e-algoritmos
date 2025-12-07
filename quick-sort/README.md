# 📘 Quick Sort e Notação Big O (JavaScript)

---

## 🔍 O que é o Quick Sort

O **Quick Sort** é um algoritmo de ordenação baseado na técnica **Dividir e Conquistar (Divide and Conquer)**.  
Ele funciona escolhendo um **pivô** e reorganizando os elementos em torno dele:  
- Os menores que o pivô vão para a **esquerda**.  
- Os maiores ou iguais ao pivô vão para a **direita**.  
Depois, o processo é repetido recursivamente em cada lado até que todo o array esteja ordenado.

### Como Funciona:

1. **Escolha do Pivô:**  
   - Seleciona um elemento do array (geralmente o último ou aleatório).  
2. **Particionamento:**  
   - Reorganiza o array colocando os menores à esquerda e os maiores à direita.  
   - O pivô fica na posição correta da ordenação final.  
3. **Recursão:**  
   - Aplica o mesmo processo às sublistas da esquerda e da direita.  
   - Caso base: arrays com 0 ou 1 elemento já estão ordenados.  
4. **Resultado Final:**  
   - Ao final das partições, o array completo estará ordenado.  

---

## 💻 Exemplo em **JavaScript**

### Implementação simples (didática):

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;               // caso base
  const pivot = arr[arr.length - 1];             // escolhe o último elemento como pivô
  const left = [], right = [];                   // menores e maiores

  for (let i = 0; i < arr.length - 1; i++) {     // percorre todos menos o pivô
    if (arr[i] < pivot) left.push(arr[i]);       // vai para a esquerda
    else right.push(arr[i]);                     // vai para a direita
  }
  return [...quickSort(left), pivot, ...quickSort(right)]; // recursão + junção
}

// Exemplo de uso:
console.log(quickSort([38, 27, 43, 10]));
// saída: [10, 27, 38, 43]
```

### Implementação clássica (in-place, mais eficiente):

```js
function partition(arr, low, high) {
  const pivot = arr[high]; // pivô
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // troca
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // coloca pivô na posição correta
  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

// Exemplo de uso:
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr));
// saída: [3, 9, 10, 27, 38, 43, 82]
```

---

## ⏱️ Complexidade do Quick Sort

O Quick Sort é muito eficiente na prática, mas sua performance depende da escolha do pivô.

- **Melhor caso:** O pivô divide o array em partes quase iguais → **O(n log n)**.  
- **Caso médio:** Estatisticamente, a divisão tende a ser equilibrada → **O(n log n)**.  
- **Pior caso:** O pivô é sempre o menor ou maior elemento → **O(n²)**.  

### Complexidade de Espaço
- Pode ser implementado **in-place**, usando apenas a pilha de recursão → **O(log n)**.  
- Versões didáticas (com `left` e `right`) usam espaço extra → **O(n)**.  

---

## ⚙️ Melhor, Pior e Caso Médio

| Caso            | Descrição                                      | Complexidade   |
| --------------- | ---------------------------------------------- | -------------- |
| **Melhor caso** | Pivô divide o array em partes iguais           | **O(n log n)** |
| **Pior caso**   | Pivô sempre mal escolhido (menor ou maior)     | **O(n²)**      |
| **Caso médio**  | Divisão razoavelmente equilibrada              | **O(n log n)** |

---

## 🧩 Como Reconhecer um Algoritmo O(n log n)

Você pode identificar que um código é **O(n log n)** quando:

1. Ele **divide o problema em partes menores** (recursão).  
2. Cada divisão gera **log n níveis** de recursão.  
3. Em cada nível, o algoritmo percorre **todos os elementos (n)**.  
4. O padrão típico é **Dividir e Conquistar**.  

💡 Exemplos: Quick Sort, Merge Sort, Heap Sort.  

---

## 📚 O Que Você Precisa Dominar Para Entender

1. **Recursão**  
   - Funções que chamam a si mesmas para dividir o problema.  
   🔗 [MDN – Funções recursivas](https://developer.mozilla.org/pt-BR/docs/Glossary/Recursion)

2. **Arrays e Índices**  
   - Manipulação de subarrays e trocas de elementos.  
   🔗 [MDN – Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

3. **Estratégia Divide and Conquer**  
   - Divisão em subproblemas e combinação dos resultados.  
   🔗 [Khan Academy – Divide and Conquer](https://pt.khanacademy.org/computing/computer-science/algorithms/divide-and-conquer/a/divide-and-conquer)

---

## ⚖️ Comparando com Outros Algoritmos

| Tipo de Complexidade | Exemplo                | Crescimento  |
| -------------------- | ---------------------- | ------------ |
| **O(1)**             | Acesso direto em array | Constante    |
| **O(log n)**         | Busca Binária          | Logarítmico  |
| **O(n)**             | Busca Linear           | Linear       |
| **O(n log n)**       | Quick Sort, Merge Sort | Quase Linear |
| **O(n²)**            | Bubble Sort            | Quadrático   |

---

## 🧩 Resumo Final

| Conceito           | Explicação                                                                 |
| ------------------ | -------------------------------------------------------------------------- |
| **Algoritmo**      | Ordena escolhendo um pivô e particionando elementos em torno dele.          |
| **Complexidade**   | O(n log n) no melhor/médio caso; O(n²) no pior caso.                        |
| **Espaço extra**   | Pode ser in-place (O(log n)) ou usar arrays auxiliares (O(n)).              |
| **Motivo**         | Divide em log n níveis e percorre n elementos em cada nível.                |
| **Resposta curta** | “O Quick Sort é O(n log n), mas pode ser O(n²) se o pivô for mal escolhido.”|

---

## 👥 Autor

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**  
