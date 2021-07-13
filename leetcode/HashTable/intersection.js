/**
 * 349. Intersection of Two Arrays
Easy

1616

1626

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */
var intersection = function(nums1, nums2) {
    let set = new Set();
    let array = [];
    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        let value = nums2[i];
        if (set.has(value)) {
            array.push(value);
            set.delete(value);
        }
    }
    return array;
};