/**
 350. Intersection of Two Arrays II
Easy

2401

534

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let map = new Map();
    for(let i = 0; i < nums1.length; i++) {
        let key = nums1[i];
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }
    let array = [];
    for (let i = 0; i < nums2.length; i++) {
        let key = nums2[i];
        if (map.has(key)) {
            let value = map.get(key);
            if (value == 0) {
                map.delete(key);
            }else {
                array.push(key);
                map.set(key, value - 1);
            }
        }
    }
    return array;
};