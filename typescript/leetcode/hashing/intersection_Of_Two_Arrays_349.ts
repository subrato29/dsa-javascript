/**
 * 349. Intersection of Two Arrays
Easy
Topics
Companies
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */

function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set();
  const res: number[] = [];

  for (const num of nums1) {
    set.add(num);
  }

  for (const num of nums2) {
    if (set.has(num)) {
      set.delete(num);
      res.push(num);
    }
  }

  return res;
}
