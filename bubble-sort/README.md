# 📘 Bubble Sort e Notação Big O (JavaScript)

---

## 🔍 O que é o Bubble Sort

O **Bubble Sort** é um algoritmo de ordenação **simples** e bastante usado em contextos didáticos.  
Ele funciona repetidamente **percorrendo o array e trocando elementos adjacentes** que estão fora de ordem.  
A cada passagem, o maior elemento “borbulha” para o final da lista.

---

## 💻 Exemplo em **JavaScript**

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {                 // percorre o array várias vezes
    for (let j = 0; j < n - i - 1; j++) {       // compara elementos adjacentes
      if (arr[j] > arr[j + 1]) {                // se estão fora de ordem
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // troca usando destructuring
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); 
// saída: [1, 2, 4, 5, 8]
```

---

## ⏱️ Complexidade do Bubble Sort

- **Melhor caso:** O array já está ordenado → **O(n)** (com verificação de trocas).  
- **Caso médio:** Precisa percorrer e trocar muitos elementos → **O(n²)**.  
- **Pior caso:** Array em ordem inversa → **O(n²)**.  

### Complexidade de Espaço
- **O(1)** → é **in-place**, não precisa de memória extra além das variáveis de controle.

---

## ⚙️ Melhor, Pior e Caso Médio

| Caso            | Descrição                          | Complexidade |
| --------------- | ---------------------------------- | ------------ |
| **Melhor caso** | Array já ordenado                  | **O(n)**     |
| **Pior caso**   | Array em ordem inversa             | **O(n²)**    |
| **Caso médio**  | Array parcialmente desordenado     | **O(n²)**    |

---

## 🧩 Como Reconhecer um Algoritmo O(n²)

Você pode identificar que um código é **O(n²)** quando:

1. Ele possui **loops aninhados** (`for` dentro de `for`).  
2. Cada elemento é comparado com vários outros.  
3. O número de operações cresce proporcionalmente a \(n \cdot n\).  

💡 Exemplo típico: Bubble Sort, Insertion Sort, Selection Sort.

---

## 📚 O Que Você Precisa Dominar Para Entender

1. **Loops aninhados**  
   - Saber como funcionam e como afetam a complexidade.  
2. **Troca de elementos**  
   - Uso de atribuição com destructuring (`[a, b] = [b, a]`).  
3. **Complexidade quadrática**  
   - Entender por que algoritmos simples não escalam bem.

---

## ⚖️ Comparando com Outros Algoritmos

| Tipo de Complexidade | Exemplo                | Crescimento  |
| -------------------- | ---------------------- | ------------ |
| **O(1)**             | Acesso direto em array | Constante    |
| **O(log n)**         | Busca Binária          | Logarítmico  |
| **O(n)**             | Busca Linear           | Linear       |
| **O(n log n)**       | Merge Sort, Quick Sort | Quase Linear |
| **O(n²)**            | Bubble Sort            | Quadrático   |

---

## 🧩 Resumo Final

| Conceito           | Explicação                                                                 |
| ------------------ | -------------------------------------------------------------------------- |
| **Algoritmo**      | Ordena comparando e trocando elementos adjacentes repetidamente.            |
| **Complexidade**   | O(n²) no pior/médio caso; O(n) no melhor caso (já ordenado).                |
| **Espaço extra**   | O(1), pois é in-place.                                                      |
| **Motivo**         | Loops aninhados → número de operações cresce proporcional a n².             |
| **Resposta curta** | “O Bubble Sort é O(n²), pois compara e troca elementos adjacentes várias vezes.” |

---

## 👥 Autor

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**  
