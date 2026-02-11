# 📘 Merge Sort e Notação Big O (JavaScript)

---

## 🔍 O que é o Merge Sort

O **Merge Sort** é um algoritmo de ordenação baseado na técnica **Dividir e Conquistar (Divide and Conquer)**.  
Ele funciona dividindo o array em partes menores, ordenando essas partes e depois **mesclando (merge)** os resultados em um array final ordenado.

### Como Funciona:

1. **Divisão:**
   - O array é dividido recursivamente em duas metades até que cada subarray tenha apenas **um elemento**.
2. **Conquista:**
   - Cada subarray é considerado ordenado (já que contém apenas um elemento).
3. **Combinação (Merge):**
   - Os subarrays são mesclados em pares, comparando elementos e formando arrays maiores já ordenados.
4. **Resultado Final:**
   - Ao final das mesclagens, o array completo estará ordenado.

---

## 💻 Exemplo em **JavaScript**

```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base da recursão: array com 1 elemento já está ordenado
  }

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  // Adiciona elementos restantes
  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

// Exemplo de uso:
const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numeros));
// saída: [3, 9, 10, 27, 38, 43, 82]
```

Explicação:

🔹 Função `merge(arrLeft, arrRight)`

- **O que faz:**
Recebe **dois subarrays já ordenados** e combina em um único array também ordenado.
- **Como funciona:**
    - Compara elemento por elemento dos dois subarrays.
    - Vai colocando no array resultado (`arrResult`) sempre o menor dos dois valores.
    - Quando um dos subarrays acaba, concatena o restante do outro.
- **Responsabilidade:**
É a parte da **combinação** (merge) do algoritmo.
👉 Ela **não sabe dividir** o array, só sabe juntar dois arrays ordenados.

🔹 Função `mergeSort(arr)`

- **O que faz:**
É a função **recursiva** que divide o array em metades até chegar em subarrays de tamanho 1.
- **Como funciona:**
    - Se o array tem 1 elemento, já está ordenado → retorna.
    - Caso contrário, divide em duas metades (`left` e `right`).
    - Chama recursivamente `mergeSort` para ordenar cada metade.
    - Usa a função `merge` para juntar as duas metades ordenadas.
- **Responsabilidade:**
É a parte da **divisão e recursão** do algoritmo.
👉 Ela **não sabe combinar** arrays, só sabe dividir e delegar a junção para `merge`.

❓ Por que não dá para usar só uma função?

- Se você tivesse apenas `merge`, ela não conseguiria ordenar o array inteiro, porque só sabe **juntar arrays já ordenados**.
- Se você tivesse apenas `mergeSort`, faltaria a lógica de **como juntar** as metades ordenadas — sem `merge`, você ficaria com duas listas ordenadas separadas, mas não teria o array final.

Ou seja:

- `mergeSort` → **divide e organiza** a recursão.
- `merge` → **combina** os pedaços ordenados.

Eles se complementam: uma sem a outra não resolve o problema.

👉 Pense assim:

- `mergeSort` é o **arquiteto** que planeja a divisão do trabalho.
- `merge` é o **pedreiro** que realmente junta as peças.
Sem arquiteto, não há plano; sem pedreiro, não há construção.

---

## ⏱️ Complexidade do Merge Sort

O Merge Sort tem **complexidade de tempo O(n log n)** em todos os casos (melhor, pior e médio).

- **Divisão:** O array é dividido em log₂(n) níveis.
- **Combinação:** Cada nível realiza até n comparações.
- **Resultado:** \(O(n \cdot \log n)\).

### Complexidade de Espaço

- Precisa de **espaço extra O(n)** para armazenar os subarrays durante a mesclagem.

---

## ⚙️ Melhor, Pior e Caso Médio

| Caso            | Descrição                   | Complexidade   |
| --------------- | --------------------------- | -------------- |
| **Melhor caso** | Array já ordenado           | **O(n log n)** |
| **Pior caso**   | Array em ordem inversa      | **O(n log n)** |
| **Caso médio**  | Array parcialmente ordenado | **O(n log n)** |

---

## 🧩 Como Reconhecer um Algoritmo O(n log n)

Você pode identificar que um código é **O(n log n)** quando:

1. Ele **divide o problema em partes menores** (recursão ou divisão).
2. Cada divisão gera **log n níveis** de recursão.
3. Em cada nível, o algoritmo percorre **todos os elementos (n)**.
4. O padrão típico é **Dividir e Conquistar**.

💡 Exemplo típico: Merge Sort, Quick Sort, Heap Sort.

---

## 📚 O Que Você Precisa Dominar Para Entender

1. **Recursão**

   - Funções que chamam a si mesmas para dividir o problema.  
     🔗 [MDN – Funções recursivas](https://developer.mozilla.org/pt-BR/docs/Glossary/Recursion)

2. **Arrays e Métodos (`slice`, `concat`)**

   - Manipulação de subarrays.  
     🔗 [MDN – Array.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

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
| **O(n log n)**       | Merge Sort, Quick Sort | Quase Linear |
| **O(n²)**            | Bubble Sort            | Quadrático   |

---

## 🧩 Resumo Final

| Conceito           | Explicação                                                               |
| ------------------ | ------------------------------------------------------------------------ |
| **Algoritmo**      | Ordena dividindo o array em partes menores e mesclando resultados.       |
| **Complexidade**   | O(n log n) em todos os casos.                                            |
| **Espaço extra**   | Precisa de memória adicional O(n).                                       |
| **Motivo**         | Divide em log n níveis e percorre n elementos em cada nível.             |
| **Resposta curta** | “O Merge Sort é O(n log n), pois divide o array e mescla em cada nível.” |

---

## 👥 Autor

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**
