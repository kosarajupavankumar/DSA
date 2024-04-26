// Question-1 : Given a binary tree A, invert the binary tree and return it. Inverting refers to making the left child the right child and vice versa.

import { TreeNode } from "./Day-1";

// Time-complexity --> O(N)
// Space Complexity --> O(H)
function invertTree(root: TreeNode | null): TreeNode | null {
  // Base case: If the root is null, return null
  if (!root) {
    return null;
  }

  // Swap left and right subtrees recursively
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  // Return the root of the inverted tree
  return root;
}

// Question : 2 Given a binary tree A. Check whether it is possible to partition the tree to two trees which have equal sum of values after removing exactly one edge on the original tree.

// Time Complexity --> O(N)
// Space Complexity --> O(N)
function EqualTreePartition(root: TreeNode): number {
  let totalSum: number = calculateSum(root);

  return findPartitionPoint(root, totalSum) ? 1 : 0;
}

function calculateSum(node: TreeNode): number {
  if (!node) {
    return 0;
  }

  return node.val + calculateSum(node.left) + calculateSum(node.right);
}

function findPartitionPoint(node: TreeNode, totalSum: number): boolean {
  if (!node) {
    return false;
  }

  let leftSum: number = calculateSum(node.left);
  let rightSum: number = calculateSum(node.right);

  if (
    (node.left != null && leftSum * 2 === totalSum) ||
    (node.right != null && rightSum * 2 === totalSum)
  ) {
    return true;
  }

  return (
    findPartitionPoint(node.left, totalSum) ||
    findPartitionPoint(node.right, totalSum)
  );
}

// Question : 3 Given a binary tree,Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL. Assume perfect binary tree.

class TreeLinkNode {
  val: number;
  left: TreeLinkNode;
  right: TreeLinkNode;
  next: TreeLinkNode;
  constructor(data: number) {
    this.val = data;
  }
}
function NextPointerBinaryTree(root: TreeLinkNode) {
  if (!root) {
    return;
  }

  let levelStart: TreeLinkNode = root;

  while (levelStart != null) {
    let current: TreeLinkNode = levelStart;

    // connect adject node for each level
    while (current != null) {
      if (current.left != null) {
        current.left.next = current.right; // connect the left child to the right child
      }

      if (current.right != null && current.next != null) {
        current.right.next = current.left.next; // Connect right child to next node's left child
      }

      current = current.next; // Move to the next node in the same level
    }
    levelStart = levelStart.left; // Move to the next level
  }
}

// Question -4 : Given a Binary Tree A consisting of N integer nodes, you need to find the diameter of the tree.The diameter of a tree is the number of edges on the longest path between two nodes in the tree.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(x: number) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

function calculateDiameter(node: TreeNode | null, diameter: number[]): number {
  if (node === null) {
    return 0; // Base case: height of null node is 0
  }

  // Recursively calculate the height of left and right subtrees
  const leftHeight: number = calculateDiameter(node.left, diameter);
  const rightHeight: number = calculateDiameter(node.right, diameter);

  // Update diameter if the sum of heights of left and right subtrees is greater
  diameter[0] = Math.max(diameter[0], leftHeight + rightHeight);

  // Return the height of the current subtree
  return Math.max(leftHeight, rightHeight) + 1;
}

function checkDiameter(root: TreeNode | null): number {
  const diameter: number[] = [0]; // variable to store the diameter

  // Call the recursive function to find the height of the tree
  calculateDiameter(root, diameter);

  return diameter[0];
}

// calling functions
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Question1 :
invertTree(root);

// Question-2 :
EqualTreePartition(root);

// QUESTION -3 :
const root1 = new TreeLinkNode(1);
root1.left = new TreeLinkNode(2);
root1.right = new TreeLinkNode(3);
root1.left.left = new TreeLinkNode(4);
root1.left.right = new TreeLinkNode(5);
root1.right.left = new TreeLinkNode(6);
root1.right.right = new TreeLinkNode(7);
NextPointerBinaryTree(root1);

// Question-4 :
checkDiameter(root1);
