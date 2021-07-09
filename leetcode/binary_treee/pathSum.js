/**
 * 113. Path Sum II
Medium

3059

88

Add to List

Share
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:
Input: root = [1,2], targetSum = 0
Output: []
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    pathSumhelper(root, [], result, targetSum);
    return result;
};

function pathSumhelper(node, path, result, sum) {
    if (node == null) {
        return;
    }
    path.push(node.val);
    if (sum == node.val && node.left == null && node.right == null) {
        result.push(path);
        return;
    }
    pathSumhelper(node.left, Array.from(path), result, sum - node.val);
    pathSumhelper(node.right, Array.from(path), result, sum - node.val);
}