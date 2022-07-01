/**
 * 404. Sum of Left Leaves
Easy

3473

251

Add to List

Share
Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:
Input: root = [1]
Output: 0
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
 * @return {number}
 */
 var sumOfLeftLeaves = function (root) {
    if (root == null) {
       return 0;
    }
    let sum = 0;
    if (root.left != null) {
       if (root.left.left == null && root.left.right == null) {
          sum += root.left.val;
       } else {
          sum += sumOfLeftLeaves(root.left);
       }
    }
    if (root.right != null) {
       if (root.right.left != null || root.right.right != null) {
          sum += sumOfLeftLeaves(root.right);
       }
    }
    return sum;
 };