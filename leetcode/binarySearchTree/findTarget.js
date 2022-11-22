/**
 * 653. Two Sum IV - Input is a BST
Easy

3260

193

Add to List

Share
Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let set = new Set();
    return traverse (root, set, k);
};

function traverse (node, set, k) {
    if (node == null) {
        return false;
    }
    if (set.has (k - node.val)) {
        return true;
    }
    set.add (node.val);
    return traverse (node.left, set, k) || traverse (node.right, set, k);
}