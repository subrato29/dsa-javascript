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
 * Ref: https://www.youtube.com/watch?v=sHrb6phW3IA&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=186
 */

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);

  let longestLength = 0;

  for (const num of numSet) {
    let currentNum: number = num;
    let currentStreak: number = 1;

    if (!numSet.has(currentNum - 1)) {
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak++;
      }
    }

    longestLength = Math.max(longestLength, currentStreak);
  }
  return longestLength;
}
