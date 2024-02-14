/*
 * 128. Longest Consecutive Sequence
 * Medium
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 *
 * Ref: https://www.youtube.com/watch?v=P6RZZMu_maU&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=31
 */

function longestConsecutive(nums: number[]): number {
  let set = new Set();
  let maxLen: number = 0;

  for (const num of nums) {
    set.add(num);
  }

  for (const num of nums) {
    let currentNum: number = num;
    let currentStreak: number = 1;

    if (!set.has(currentNum - 1)) {
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak++;
      }
    }

    maxLen = Math.max(maxLen, currentStreak);
  }

  return maxLen;
}
