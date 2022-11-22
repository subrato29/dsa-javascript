/**
 * 169. Majority Element
Easy

5513

270

Add to List

Share
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */
var majorityElement = function(nums) {
    let occurance = nums.length / 2;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if(map.has(key)) {
            map.set(key, map.get(key) + 1);
        }else {
            map.set(key, 1);
        }
    }
    for (let [key, value] of map) {
        if (value > occurance) {
            return key;
        }
    }
    return -1;
};