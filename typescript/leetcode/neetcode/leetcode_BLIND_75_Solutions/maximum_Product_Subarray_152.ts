/**
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

function maxProduct(nums: number[]): number {
  let maxProduct: number = nums[0];
  let minProduct: number = nums[0];
  let res: number = maxProduct;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp: number = maxProduct;
      maxProduct = minProduct;
      minProduct = temp;
    }

    maxProduct = Math.max(nums[i], nums[i] * maxProduct);
    minProduct = Math.min(nums[i], nums[i] * minProduct);

    res = Math.max(res, maxProduct);
  }

  return res;
}
