/**
 * 108. Convert Sorted Array to Binary Search Tree
Easy

4831

309

Add to List

Share
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 */

var sortedArrayToBST = function(nums) {
    if (nums == null || nums.length == 0) {
        return null;
    }
    let left = 0;
    let right = nums.length - 1;
    return helper(nums, left, right);
};

function helper (nums, left, right) {
    if (left > right) {
        return null;
    }
    let mid = left + Math.floor((right - left) / 2);
    let current = new TreeNode(nums[mid]);
    current.left = helper (nums, left, mid - 1);
    current.right = helper (nums, mid + 1, right);
    return current;
}