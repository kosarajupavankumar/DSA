// Question -1 : Valid Binary Search Tree
// You are given a binary tree represented by root A. You need to check if it is a Binary Search Tree or not.

import { TreeNode } from "./Day-1";

// TimeComplexity --> O(N)
// Space Complexity --> O(N)
function validBST(root: TreeNode) {
  return isValidBinarySearchTree(root, Number.MIN_VALUE, Number.MAX_VALUE)
    ? 1
    : 0;
}

function isValidBinarySearchTree(
  node: TreeNode | null,
  min: number,
  max: number
): boolean {
  if (node == null) {
    return true;
  }

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return (
    isValidBinarySearchTree(node.left, min, node.val) &&
    isValidBinarySearchTree(node.right, node.val, max)
  );
}

// QUestion-2 : Given a Binary Search Tree A. Check whether there exists a node with value B in the BST.
// Time Complexity --> O(N)
// Space Comlexity --> O(N)
function searchInBST(root: TreeNode, target: number): number {
  if (root != null) {
    return 0;
  }

  if (root.val == target) {
    return 1;
  } else if (target < root.val) {
    return searchInBST(root.left, target);
  } else {
    return searchInBST(root.right, target);
  }
}

// Question: 3 --> Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function SortedArrayToBalancedBST(arr: number[]): TreeNode | null {
  if (arr == null || arr.length == 0) {
    return null;
  }

  return constructBST(arr, 0, arr.length - 1);
}

function constructBST(arr: number[], start: number, end: number): TreeNode {
  if (start > end) {
    return null;
  }

  const mid = Math.floor(start + (end - start) / 2);

  const node = new TreeNode(mid);

  node.left = constructBST(arr, start, mid - 1);
  node.right = constructBST(arr, mid + 1, end);

  return node;
}

// calling functions
// Question -1 :
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(validBST(root));

// Question : 2
console.log(searchInBST(root, 3));

// Question -3 :
console.log(SortedArrayToBalancedBST([1, 2, 3, 4, 5, 6, 7]));
