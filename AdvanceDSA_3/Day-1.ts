// topic --> Trees --> Structural & Traversal

export class TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
  constructor(data: number) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Question : 1 --> Given a binary tree, return the inorder traversal of its nodes' values.(LDR)
  // Time complexity --> O(N)
  // Space complexity --> O(N)
  public inOrderTraversal(rootNode: TreeNode): number[] {
    const result: number[] = [];
    this.InOrderTraversal(rootNode, result);
    return result;
  }

  public InOrderTraversal(node: TreeNode, result: number[]): void {
    if (node == null) {
      return;
    }
    this.InOrderTraversal(node.left, result);
    result.push(node.val);
    this.InOrderTraversal(node.right, result);
  }

  // Question -2 : Given a binary tree, return the preorder traversal of its nodes values.(DLR)
  // Time Compelxity --> O(n)
  // Space Compelxity --> O(n)
  public preOrderTraversal(rootNode: TreeNode): number[] {
    const result: number[] = [];
    this.PreOrderTraversal(rootNode, result);
    return result;
  }

  public PreOrderTraversal(node: TreeNode, result: number[]): void {
    if (node == null) {
      return;
    }
    result.push(node.val);
    this.PreOrderTraversal(node.left, result);
    this.PreOrderTraversal(node.right, result);
  }

  // Question : 3 --> Given a binary tree, return the Postorder traversal of its nodes values.(LRD)
  // Time Compelxity --> O(n)
  // Space Compelxity --> O(n)
  public postOrderTraversal(rootNode: TreeNode): number[] {
    const result: number[] = [];
    this.PostOrderTraversal(rootNode, result);
    return result;
  }

  public PostOrderTraversal(node: TreeNode, result: number[]): void {
    if (node == null) {
      return;
    }
    this.PostOrderTraversal(node.left, result);
    this.PostOrderTraversal(node.right, result);
    result.push(node.val);
  }

  // Question - 4 : Q2. Binary Tree From Inorder And Preorder
  // Time Complexity -->  O(N)
  // Space complexity -->  O(N)
  public buildTreeFromInOrderAndPreOrder(
    preOrder: number[],
    inorder: number[]
  ): TreeNode {
    if (inorder.length === 0 || preOrder.length === 0) {
      return null;
    }

    const rootVal = preOrder[0]; // first element
    const root = new TreeNode(rootVal);

    const rootIndexInInorder = inorder.indexOf(rootVal);

    const leftInOrder = inorder.slice(0, rootIndexInInorder);
    const rightInOrder = inorder.slice(rootIndexInInorder + 1); // end of the element inOrder

    const leftPreorder = preOrder.slice(1, 1 + leftInOrder.length);
    const rightPreOrder = preOrder.slice(1 + leftInOrder.length); // end of the element in postOrder

    root.left = this.buildTreeFromInOrderAndPreOrder(leftPreorder, leftInOrder);
    root.right = this.buildTreeFromInOrderAndPreOrder(
      rightPreOrder,
      rightInOrder
    );

    return root;
  }

  // Question : 5 --> Given the inorder and postorder traversal of a tree, construct the binary tree.

  // Time Complexity --> O(N)
  // Space Complexity --> O(N)

  public buildTreeFromInorderAndPostOrder(
    inorder: number[],
    postOrder: number[]
  ): TreeNode {
    if (inorder.length === 0 || postOrder.length === 0) {
      return null;
    }

    const rootVal = postOrder[postOrder.length - 1];
    const root = new TreeNode(rootVal);

    const rootIndexInOrder = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndexInOrder);
    const rightInorder = inorder.slice(rootIndexInOrder + 1);

    const leftPostOrder = postOrder.slice(0, leftInorder.length);
    const rightPostOrder = postOrder.slice(
      leftInorder.length,
      postOrder.length - 1
    );

    root.left = this.buildTreeFromInorderAndPostOrder(
      leftInorder,
      leftPostOrder
    );
    root.right = this.buildTreeFromInorderAndPostOrder(
      rightInorder,
      rightPostOrder
    );

    return root;
  }
}

// calling functions
// First Question
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

const solution = new Solution();
console.log(solution.inOrderTraversal(root));

// Second Question
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

console.log(solution.preOrderTraversal(root1));

// Thrid Question
const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(3);

console.log(solution.postOrderTraversal(root2));

// fourth question

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root3 = solution.buildTreeFromInOrderAndPreOrder(preorder, inorder);
console.log(root3);

// fifth question
const inorder1 = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
const root4 = solution.buildTreeFromInorderAndPostOrder(inorder1, postorder);
console.log(root);
