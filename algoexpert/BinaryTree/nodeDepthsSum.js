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
    return nodeDepthsHealper (root, 0);
}

function nodeDepthsHealper(node, depth) {
    if (node == null) {
        return 0;
    }
    return depth + nodeDepthsHealper(node.left, depth + 1) +  nodeDepthsHealper(node.right, depth + 1);
}