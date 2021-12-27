/**
 * 300. Longest Increasing Subsequence
Medium

9963

202

Add to List

Share
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
 */

/**
 * Pseudo code.
 * Binary Search

We can put the increasing sequence in a list.

for each num in nums
     if(list.size()==0)
          add num to list
     else if(num > last element in list)
          add num to list
     else 
          replace the element in the list which is the smallest but bigger than num
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    if (nums == null && nums.length == 0) {
        return 0;
    }
    let arr = [];
    for (const num of nums) {
        if (arr.length == 0 || arr[arr.length - 1] < num) {
            arr.push (num);
        } else {
            let start = 0;
            let end = arr.length - 1;
            while (start < end) {
                let mid = start + Math.floor ((end - start) / 2);
                if (arr[mid] < num) {
                    start = mid + 1;
                } else {
                    end = mid; 
                }
            }
            arr[end] = num;
        }
    }
    return arr.length;
};