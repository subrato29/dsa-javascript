/**
 * 671. Second Minimum Node In a Binary Tree
Easy

896

1165

Add to List

Share
Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:
Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.

Example 2:
Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
 */
var findSecondMinimumValue = function(root) {
    let array = [];
    helper (root, array);
    if (array.length > 1) {
        array.sort((a, b) => a - b);
        return array[1];
    }
    return -1;
};

function helper (node, array) {
    if (node == null) {
        return;
    }
    if (node.left == null && node.right == null) {
        if (!array.includes(node.val)) {
            array.push(node.val);
        }
        return;
    }
    helper (node.left, array);
    helper (node.right, array);
}