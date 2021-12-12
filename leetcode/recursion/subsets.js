/**
 * 78. Subsets
Medium

7704

128

Add to List

Share
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 */

var subsets = function(nums) {
    let result = [[]];
    for (const ele of nums) {
        let length = result.length;
        for (let i = 0; i < length; i++) {
            const currentSubset = result[i];
            result.push (currentSubset.concat(ele));
        }
    }
    return result;
};