/**
 * 560. Subarray Sum Equals K
Medium

10218

335

Add to List

Share
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    if (nums == null && nums.length == 0) {
        return 0;
    }
    let counter = 0;
    let sum = 0;
    let map = new Map();
    map.set (0, 1);
    for (const num of nums) {
        sum += num;
        if (map.has (sum - k)) {
            counter += map.get (sum - k);
        }
        if (!map.has (sum)) {
            map.set (sum, 1);
        } else {
            map.set (sum, map.get(sum) + 1);
        }
    }
    return counter;
};