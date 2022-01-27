/**
 * 1464. Maximum Product of Two Elements in an Array
Easy

786

134

Add to List

Share
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
Example 1:
Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

Example 2:
Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:
Input: nums = [3,7]
Output: 12
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    nums.sort ((a, b) => a - b);
    let max_prod = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 1; i++) {
        let prod = (nums[i] - 1) * (nums[i + 1] - 1);
        max_prod = Math.max (max_prod, prod);
    }
    return max_prod;
};