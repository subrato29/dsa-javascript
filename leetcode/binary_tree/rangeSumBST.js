/**
 * 938. Range Sum of BST
Easy

2682

304

Add to List

Share
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 */

var rangeSumBST = function(root, low, high) {
    let arr = [];
    let sum = 0;
    helper (root, arr, low, high)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

function helper (node, arr, low, high) {
    if (node == null) {
        return;
    }
    if (node.val >= low && node.val <= high) {
        arr.push(node.val);
    }
    if (node.left == null && node.right == null) {
        return;
    }
    helper(node.left, arr, low, high);
    helper(node.right, arr, low, high);
}