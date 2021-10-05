/**
 * 347. Top K Frequent Elements
Medium

6151

301

Add to List

Share
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:
1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    if (nums.length == 0 || nums == null) {
        return [];
    }
    let map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set (num, map.get(num) + 1);
        } else {
            map.set (num, 1);
        }
    }
    const sortedMapBasedByValues = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    
    let res = [];
    for (let [key, value] of sortedMapBasedByValues) {
        if (res.length < k && map.size > 0) {
            res.push(key);
        } else {
            break;
        }
    }
    return res;
};