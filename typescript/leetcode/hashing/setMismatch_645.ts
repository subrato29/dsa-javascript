/**
 * 645. Set Mismatch

Easy
Topics
Companies
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

function findErrorNums(nums: number[]): number[] {
  const set = new Set();
  const errors = new Array();

  for (const num of nums) {
    if (set.has(num)) {
      errors.push(num);
    } else {
      set.add(num);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      errors.push(i);
    }
  }

  return errors;
}
