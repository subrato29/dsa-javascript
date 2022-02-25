/**
 * 169. Majority Element
Easy

8826

319

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
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const occurance = Math.floor (nums.length / 2);
    let map = new Map ();
    for (const num of nums) {
        if (map.has (num)){
            map.set (num, map.get (num) + 1);
        } else {
            map.set (num, 1);
        }
    }
    for (const [key,value] of map) {
        if (value > occurance) {
            return key;
        }
    }
    return -1;
};