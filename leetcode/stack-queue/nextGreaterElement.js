/**
 * 496. Next Greater Element I
 *
 * Next Greater Element I You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a
 * subset of nums2.
 *
 * Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 *
 * The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not
 * exist, return -1 for this number.
 *
 * Example 1: Input: nums1 = [4,1,2], nums2 = [1,3,4,2] Output: [-1,3,-1] Explanation: For number 4 in the first array,
 * you cannot find the next greater number for it in the second array, so output -1. For number 1 in the first array,
 * the next greater number for it in the second array is 3. For number 2 in the first array, there is no next greater
 * number for it in the second array, so output -1.
 *
 * Example 2: Input: nums1 = [2,4], nums2 = [1,2,3,4] Output: [3,-1] Explanation: For number 2 in the first array, the
 * next greater number for it in the second array is 3. For number 4 in the first array, there is no next greater number
 * for it in the second array, so output -1.
 *
 * Ref: https://www.youtube.com/watch?v=8BDKB2yuGyg
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];

  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      nums1[i] = map.get(nums1[i]);
    } else {
      nums1[i] = -1;
    }
  }
  return nums1;
};
