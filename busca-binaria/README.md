# 📘 Busca Binária e Notação Big O (JavaScript)

---

## 🔍 O que é a Busca Binária

A **Busca Binária** (Binary Search) é um algoritmo de busca muito eficiente, mas que possui uma condição fundamental: ela **só pode ser aplicada em listas ou arrays que estão previamente ORDENADOS**.

Em vez de verificar elemento por elemento (como na busca linear), a busca binária funciona dividindo o espaço de busca pela metade a cada passo.

### Como Funciona:

1.  **Encontre o Meio:** O algoritmo compara o valor procurado com o elemento que está no **meio** do array.
2.  **Achou:** Se o valor do meio for o valor procurado, a busca termina.
3.  **Reduza o Espaço:**
    - Se o valor procurado for **menor** que o elemento do meio, o algoritmo **descarta a metade direita** do array.
    - Se o valor procurado for **maior** que o elemento do meio, o algoritmo **descarta a metade esquerda** do array.
4.  **Repita:** O processo se repete na metade restante até que o valor seja encontrado ou o espaço de busca se esgote.

### Exemplo em **JavaScript**:

```js
function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2); // Encontra o índice do meio

    if (arr[meio] === alvo) {
      return meio; // O alvo foi encontrado
    } else if (arr[meio] < alvo) {
      inicio = meio + 1; // Descarta a metade esquerda (o alvo está à direita)
    } else {
      fim = meio - 1; // Descarta a metade direita (o alvo está à esquerda)
    }
  }

  return -1; // O alvo não foi encontrado
}

// O array DEVE estar ordenado para que a busca binária funcione!
const numerosOrdenados = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(buscaBinaria(numerosOrdenados, 40)); // saída: 3 (índice)
console.log(buscaBinaria(numerosOrdenados, 15)); // saída: -1 (não encontrado)
```

---

## ⏱️ Complexidade da Busca Binária: **O(log n)**

A busca binária tem **complexidade de tempo O(log n)** (Logarítmica).

Isso significa que o número de operações **cresce muito lentamente** à medida que o tamanho da entrada (`n`) aumenta, pois a cada passo, o tamanho do problema é **reduzido pela metade**.

### Exemplo de Logaritmo (Base 2):

| Tamanho da lista (n)  | Número máximo de comparações ($\log_2 n$) |
| --------------------- | ----------------------------------------- |
| 16 elementos          | 4 comparações (reduz a 8, 4, 2, 1)        |
| 1024 elementos        | 10 comparações                            |
| 1.000.000 elementos   | Apenas 20 comparações\!                   |

➡️ Para um array de um milhão de itens, a busca binária é **50.000 vezes mais rápida** que a busca linear no pior caso (20 operações vs. 1.000.000 de operações).

---

## ⚙️ Melhor, Pior e Caso Médio

| Caso             | Descrição                                       | Complexidade     |
| ---------------- | ----------------------------------------------- | ---------------- |
| **Melhor caso**  | O elemento está exatamente no meio              | **O(1)**         |
| **Pior caso**    | O elemento não existe ou está em uma das pontas | **O(log n)**     |
| **Caso médio**   | A busca descarta partes do array                | **O(log n)**     |

---

## 🧩 Como Reconhecer um Algoritmo O(log n)

Você pode identificar que um código é **O(log n)** quando:

1.  Ele trabalha com um **conjunto de dados ordenado**.
2.  Ele **reduz o problema** em uma fração constante (geralmente pela metade) em cada iteração.
3.  Tipicamente utiliza um laço (`while`) que compara o alvo com o elemento central e ajusta ponteiros (`inicio` e `fim`).

💡 Exemplo típico em JavaScript:

```js
// ... no algoritmo de busca binária:
while (inicio <= fim) {
  // O espaço de busca (fim - inicio) é reduzido pela metade em cada loop
  if (arr[meio] < alvo) {
    inicio = meio + 1;
  } else {
    fim = meio - 1;
  }
}
```

→ O número de iterações necessárias para cobrir o array cresce logaritmicamente → **O(log n)**

---

## 📚 O Que Você Precisa Dominar Para Entender

Para compreender bem a **busca binária** e sua complexidade, é fundamental dominar:

1.  **Arrays Ordenados**
    - Entender a importância da ordenação prévia dos dados.
    - O custo de ordenar um array é geralmente **O(n log n)** (com algoritmos como Merge Sort ou Quick Sort).
2.  **Conceito de Logaritmos**
    - Entender que $\log_2 n$ é o número de vezes que você pode dividir $n$ pela metade.
3.  **Ponteiros/Índices de Controle**
    - Uso de variáveis como `inicio`, `fim` e `meio` para controlar o espaço de busca.
    <!-- end list -->
    4.  **Estruturas de Controle**
    <!-- end list -->
    - `while` (Laços de repetição) e `if`/`else` (Condicionais).

---

## ⚖️ Comparando com Outros Algoritmos

| Tipo de Complexidade  | Exemplo                              | Crescimento  |
| --------------------- | ------------------------------------ | ------------ |
| **O(1)**              | Acesso direto em array (`lista[i]`)  | Constante    |
| **O(log n)**          | **Busca Binária**                    | Logarítmico  |
| **O(n)**              | Busca Linear                         | Linear       |
| **O(n²)**             | Bubble sort                          | Quadrático   |

---

## 🧩 Resumo Final

| Conceito                  | Explicação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| **Algoritmo**             | Busca um elemento **dividindo o espaço pela metade** a cada passo.                      |
| **Pré-requisito**         | **O array DEVE estar ORDENADO.**                                                        |
| **Complexidade**          | **O(log n)**                                                                            |
| **Motivo**                | O número de operações cresce muito lentamente (Logarítmico).                            |
| **Melhor caso**           | O(1)                                                                                    |
| **Pior caso**             | O(log n)                                                                                |
| **Resposta curta**        | “A busca binária é **O(log n)**, pois elimina metade do espaço de busca em cada passo.” |

---

## 👥 Autor

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**
