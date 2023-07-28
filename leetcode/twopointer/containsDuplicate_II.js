/**
 * 219. Contains Duplicate II
 *
 * Easy 5.2K 2.8K Companies
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such
 * that nums[i] == nums[j] and abs(i - j) <= k.
 *
 *
 * Example 1: Input: nums = [1,2,3,1], k = 3 Output: true
 *
 * Example 2: Input: nums = [1,0,1,1], k = 1 Output: true
 *
 * Example 3: Input: nums = [1,2,3,1,2,3], k = 2 Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num)) {
      if (Math.abs(map.get(num) - i) <= k) {
        return true;
      }
    }
    map.set(num, i);
  }
  return false;
};
