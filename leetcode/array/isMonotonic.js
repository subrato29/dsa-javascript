/**
 * 896. Monotonic Array
Easy

1175

49

Add to List

Share
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

Example 2:
Input: nums = [6,5,4,4]
Output: true

Example 3:
Input: nums = [1,3,2]
Output: false

Example 4:
Input: nums = [1,2,4,5]
Output: true

Example 5:
Input: nums = [1,1,1]
Output: true
 */

var isMonotonic = function(nums) {
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isNonIncreasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            isNonDecreasing = false;
        }
    }
    return isNonDecreasing || isNonIncreasing;
};