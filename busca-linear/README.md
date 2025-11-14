# 📘 Busca Linear e Notação Big O (JavaScript)

## 🔍 O que é a Busca Linear

A **busca linear** é um algoritmo simples usado para **encontrar um valor dentro de uma lista, vetor ou array**.
Ela funciona **percorrendo cada elemento, um por um**, até encontrar o valor desejado ou chegar ao fim da lista.

Exemplo em **JavaScript**:

```js
function buscaLinear(lista, valorProcurado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valorProcurado) {
      return i; // retorna o índice do valor encontrado
    }
  }
  return -1; // retorna -1 se o valor não for encontrado
}

// Exemplo de uso:
const numeros = [10, 20, 30, 40, 50];
console.log(buscaLinear(numeros, 30)); // saída: 2
```

➡️ O algoritmo percorre toda a lista **até encontrar** o elemento procurado.

---

## 🧠 O que é Notação Big O

A **notação Big O** descreve **como o tempo de execução de um algoritmo cresce** à medida que o tamanho da entrada aumenta.
Ela **não mede tempo real**, mas sim o **comportamento de crescimento** — ou seja, o quanto mais “caro” o algoritmo se torna conforme a entrada cresce.

---

## ⏱️ Complexidade da Busca Linear: **O(n)**

A busca linear tem **complexidade de tempo O(n)**, porque:

- No **pior caso**, o algoritmo precisa percorrer **todos os elementos** da lista;
- O número de operações cresce **proporcionalmente** ao tamanho da entrada `n`.

### Exemplo:

| Tamanho da lista (n) | Operações no pior caso |
| -------------------- | ---------------------- |
| 5 elementos          | até 5 comparações      |
| 1000 elementos       | até 1000 comparações   |

Portanto:

> Quanto maior a lista, **mais tempo** a busca levará de forma **linear**.

---

## ⚙️ Melhor, Pior e Caso Médio

| Caso            | Descrição                                | Complexidade |
| --------------- | ---------------------------------------- | ------------ |
| **Melhor caso** | O elemento está logo no início           | **O(1)**     |
| **Pior caso**   | O elemento está no final (ou não existe) | **O(n)**     |
| **Caso médio**  | O elemento está “em algum lugar” no meio | **O(n)**     |

---

## 🧩 Como Reconhecer um Algoritmo O(n)

Você pode identificar que um código é **O(n)** quando:

1. Ele **itera uma lista inteira** (`for`, `forEach`, `while`, etc.);
2. O tempo total **cresce proporcionalmente ao tamanho da entrada**;
3. Não existem **loops aninhados** (`for` dentro de `for`), que criariam complexidade **O(n²)**;
4. Cada passo dentro do loop executa **operações simples (O(1))**.

💡 Exemplo típico em JavaScript:

```js
for (let item of lista) {
  console.log(item); // operação simples
}
```

→ Percorre todos os elementos uma única vez → **O(n)**

---

## 📚 O Que Você Precisa Dominar Para Entender

Para compreender bem a **notação Big O** e a **busca linear**, é importante estudar:

1. **Arrays e estruturas de dados básicas**
   - Saber como funcionam e como acessar elementos.
     
     🔗 [MDN – Estrutura de dados do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Data_structures)  
     
     🔗 [Blog Casa do Desenvolvedor – Arrays em JavaScript](https://blog.casadodesenvolvedor.com.br/arrays-em-javascript/)  
     
     🔗 [DEV.to – Estruturas de dados com exemplos](https://dev.to/trinity_/estruturas-de-dados-em-javascript-com-exemplos-de-codigo-4an0)

2. **Laços de repetição**
   - `for`, `while`, `for...of`, `forEach`.
     
     🔗 [MDN – Laços e iterações](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)  
     
     🔗 [YouTube – Aula sobre laços de repetição](https://www.youtube.com/watch?v=SYMxV4HM224)  
     
     🔗 [freeCodeCamp – Laços explicados](https://www.freecodecamp.org/portuguese/news/lacos-em-javascript-explicados-lacos-for-while-do-while-e-mais/)

3. **Análise de complexidade**
   - Entender a diferença entre _melhor_, _pior_ e _caso médio_.
     
     🔗 [freeCodeCamp – O que é a notação Big O](https://www.freecodecamp.org/portuguese/news/o-que-e-a-notacao-big-o-complexidade-de-tempo-e-de-espaco/)  
     
     🔗 [DataCamp – Guia de complexidade de tempo](https://www.datacamp.com/pt/tutorial/big-o-notation-time-complexity)  
     
     🔗 [Guia de algoritmos – Big O](https://guievbs.github.io/sorting-algorithms/big_o/)

4. **Funções e retornos**
   - Compreender quando uma função termina e como isso afeta o tempo de execução.
     
     🔗 [MDN – Funções em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions)  
     
     🔗 [Hashtag Treinamentos – Parâmetros e retornos](https://www.hashtagtreinamentos.com/parametros-argumentos-e-retornos-em-javascript)  
     
     🔗 [JavaScript Progressivo – Funções com retorno](https://www.javascriptprogressivo.net/2018/12/Funcao-Parametro-Argumento-Retorno.html)

---

## 🧮 Como Responder Questões Sobre Isso

Quando alguém pergunta:

> “Qual a complexidade da busca linear?”

Você pode responder:

> A busca linear tem **complexidade O(n)**, pois no pior caso o algoritmo precisa percorrer todos os elementos da lista para encontrar (ou não) o valor desejado.
> O tempo de execução cresce **linearmente com o tamanho da entrada**.

✅ **Resumo de resposta ideal:**

```text
Busca Linear → O(n)
Motivo: percorre todos os elementos até encontrar o alvo.
Melhor caso: O(1)
Pior caso: O(n)
```

---

## ⚖️ Comparando com Outros Algoritmos

| Tipo de Complexidade | Exemplo                             | Crescimento |
| -------------------- | ----------------------------------- | ----------- |
| **O(1)**             | Acesso direto em array (`lista[i]`) | Constante   |
| **O(n)**             | Busca linear                        | Linear      |
| **O(log n)**         | Busca binária                       | Logarítmico |
| **O(n²)**            | Bubble sort                         | Quadrático  |

---

## 🧩 Resumo Final

| Conceito                 | Explicação                                                                     |
| ------------------------ | ------------------------------------------------------------------------------ |
| **Algoritmo**            | Busca um elemento verificando cada item da lista                               |
| **Complexidade**         | O(n)                                                                           |
| **Motivo**               | Tempo cresce proporcionalmente ao tamanho da entrada                           |
| **Reconhecimento**       | Loop único percorrendo lista                                                   |
| **Melhor caso**          | O(1)                                                                           |
| **Pior caso**            | O(n)                                                                           |
| **Assuntos necessários** | Arrays, loops, análise de complexidade                                         |
| **Resposta curta**       | “A busca linear é O(n) pois percorre todos os elementos até encontrar o alvo.” |

---

💡 **Dica prática:**
Em JavaScript, se você usa métodos como `Array.prototype.find()`, `includes()` ou `indexOf()`,
eles também implementam **busca linear** — logo, possuem **complexidade O(n)** internamente.

Exemplo:

```js
const frutas = ["maçã", "banana", "uva", "manga"];

console.log(frutas.includes("banana")); // true → O(n)
console.log(frutas.indexOf("manga")); // 3 → O(n)
```

---

## 👥 Autor

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**
