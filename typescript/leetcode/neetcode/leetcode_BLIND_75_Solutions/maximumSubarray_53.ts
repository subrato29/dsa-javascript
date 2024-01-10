/**
 * 53. Maximum Subarray
 *
 * Given an integer array nums, find the
 * subarray
 *  which has the largest sum and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 */

function maxSubArray(nums: number[]): number {
  let maxSum: number = nums[0];
  let currSum: number = 0;

  for (const num of nums) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += num;
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
}
