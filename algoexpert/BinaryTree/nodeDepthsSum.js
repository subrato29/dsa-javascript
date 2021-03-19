//Time complexity: O(n) -- n => number of nodes
//Space complexity: O(h) -- h => height of the tree.

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root) {
    return nodeDepthsHelper (root, 0);
}

function nodeDepthsHelper(node, depth) {
    if (node == null) {
        return 0;
    }
    return depth + nodeDepthsHelper(node.left, depth + 1) +  nodeDepthsHelper(node.right, depth + 1);
}