import { TreeNode } from "./Day-1";
// Question -1 : Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Time complexity --> O(N)
// Space complexity --> O(N)
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  // if the root is null, return an empty result
  if (!root) {
    return result;
  }

  const queue: TreeNode[] = [];
  queue.push(root); // add the first node in the queue

  while (queue.length > 0) {
    const levelSize = queue.length;

    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift(); // remove the first element in the queue;
      currentLevel.push(current.val);

      if (current.left != null) {
        queue.push(current.left);
      }

      if (current.right != null) {
        queue.push(current.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}

// Question -2 : Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.

// Time Complexty --> O(N)
// Space Complexity --> O(N)
function RightViewOfBinaryTree(root: TreeNode): number[][] {
  const result: number[][] = [];

  if (!root) {
    return result;
  }

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    let lastNodeValue: number | null = null;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      lastNodeValue = current.val;

      if (current.left != null) {
        queue.push(current.left);
      }

      if (current.right != null) {
        queue.push(current.right);
      }
    }

    if (lastNodeValue !== null) {
      result.push([lastNodeValue]);
    }
  }

  return result;
}

// Question-3 : Given a binary tree, return a 2-D array with vertical order traversal of it. Go through the example and image for more details.

// Time Complexity -->
// Space Complexity -->

function verticalOrderTravseral(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  if (!root) {
    return result;
  }

  // Map to store nodes at each vertical level
  const verticalLevels = new Map<number, number[]>();

  const queue: { node: TreeNode; column: number }[] = [];
  queue.push({ node: root, column: 0 });

  while (queue.length > 0) {
    const { node, column } = queue.shift();

    if (!verticalLevels.has(column)) {
      verticalLevels.set(column, []);
    }

    verticalLevels.get(column).push(node.val);

    if (node.left) {
      queue.push({ node: node.left, column: column - 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, column: column + 1 });
    }
  }

  const sortedColumns = Array.from(verticalLevels.keys()).sort((a, b) => a - b);

  for (const column of sortedColumns) {
    result.push(verticalLevels.get(column)!);
  }

  return result;
}

// Question -4 : Given a root of binary tree A, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function isBalanced(root: TreeNode): number {
  return checkHeight(root) !== -1 ? 1 : 0;
}

function checkHeight(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }

  // calculate the height of the left subtree
  const leftHeight = checkHeight(node.left);
  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = checkHeight(node.right);
  if (rightHeight === -1) {
    return -1;
  }

  // check if the tree is balanced
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

// calling functions

// Question -1 :
const root5 = new TreeNode(3); // Create a binary tree
root5.left = new TreeNode(9);
root5.right = new TreeNode(20);
root5.right.left = new TreeNode(15);
root5.right.right = new TreeNode(7);

console.log(levelOrder(root5));

// Question -2
console.log(RightViewOfBinaryTree(root5));

// Question -3
console.log(verticalOrderTravseral(root5));

// Question4
console.log(isBalanced(root5));
