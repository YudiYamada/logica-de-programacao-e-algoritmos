// Exercício: Binary Tree Traversals (Inorder, Preorder, Postorder)
// Problema: Dada uma árvore binária, percorra seus nós em diferentes ordens:
// - Inorder (Esquerda → Raiz → Direita)
// - Preorder (Raiz → Esquerda → Direita)
// - Postorder (Esquerda → Direita → Raiz)

// Exemplo de árvore:
//         1
//        / \
//       2   3
//      / \
//     4   5
//
// Inorder: [4,2,5,1,3]
// Preorder: [1,2,4,5,3]
// Postorder: [4,5,2,3,1]

// Passo a passo da solução:
// 1. Definir a estrutura de um nó da árvore (classe TreeNode).
// 2. Implementar funções recursivas para cada tipo de travessia.
// 3. Retornar os valores em um array.

// Assuntos que você precisa saber para resolver esse exercício:
// - Estruturas de dados: árvores binárias
// - Recursão
// - Estruturas de repetição implícitas (chamadas recursivas)
// - Conceito de travessia de árvore

// Complexidade de tempo (Big O):
// - Cada nó é visitado uma vez → O(n).
// - Espaço adicional depende da profundidade da árvore (recursão).

// Implementação:
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Inorder Traversal (Esquerda → Raiz → Direita)
function inorderTraversal(root, result = []) {
  if (root) {
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
  }
  return result;
}

// Preorder Traversal (Raiz → Esquerda → Direita)
function preorderTraversal(root, result = []) {
  if (root) {
    result.push(root.val);
    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);
  }
  return result;
}

// Postorder Traversal (Esquerda → Direita → Raiz)
function postorderTraversal(root, result = []) {
  if (root) {
    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.val);
  }
  return result;
}

// Teste com a árvore do exemplo:
//         1
//        / \
//       2   3
//      / \
//     4   5
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3);

console.log("Inorder:", inorderTraversal(root)); // Saída: [4,2,5,1,3]
console.log("Preorder:", preorderTraversal(root)); // Saída: [1,2,4,5,3]
console.log("Postorder:", postorderTraversal(root)); // Saída: [4,5,2,3,1]
