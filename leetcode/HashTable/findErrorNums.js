/**
 645. Set Mismatch
Easy

1202

460

Add to List

Share
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]
 */
var findErrorNums = function(nums) {
    let map = new Map();
    let duplicate = -1;
    let missing = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        if(map.has(key)) {
            map.set(key, map.get(key) + 1);
        }else {
            map.set(key, 1);
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (map.has(i)) {
            if (map.get(i) == 2) {
                duplicate = i;
            }
        } else {
            missing = i;
        }
    }
    result.push(duplicate);
    result.push(missing);
    return result;
};