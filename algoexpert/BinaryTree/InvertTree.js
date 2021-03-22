
//Time complexity: O(n) -- n => number of nodes
//Space complexity: O(d) -- d => depth of the tree

function invertBinaryTree(root) {
    if (root == null) {
          return;
      }
      swapBinaryTree(root);
      invertBinaryTree(root.left);
      invertBinaryTree(root.right);
  }
  
  function swapBinaryTree (node) {
      let tempNode = node.left;
      node.left = node.right;
      node.right = tempNode;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }