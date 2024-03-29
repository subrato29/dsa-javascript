/**
 * 2089. Find Target Indices After Sorting Array
Easy

339

15

Add to List

Share
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    let set = new Set();
    nums.sort ((a, b) => a - b);
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = low + Math.floor ((high - low) / 2);
        if (nums[mid] == target) {
            set.add(mid);
            while (mid > 0) {
                if (nums[mid] == nums[mid - 1]) {
                    set.add (mid - 1);  
                    mid = mid - 1;
                } else {
                    break; 
                }
            }
            while (mid < nums.length - 1) {
                if (nums[mid] == nums[mid + 1]) {
                    set.add (mid + 1);  
                    mid = mid + 1;
                } else {
                    break; 
                }
            }
            let arr = [...set];
            arr.sort ((a, b) => a - b);
            return arr;
        } else {
            if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return [...set];
};