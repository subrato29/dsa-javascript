/**
 * 3. Longest Substring Without Repeating Characters
Medium

22101

993

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

function lengthOfLongestSubstring(s: string): number {
  let uniqueIndex: number = 0;
  let duplicateIndex: number = 0;
  let longest: number = 0;

  const set = new Set();

  while (uniqueIndex < s.length) {
    if (!set.has(s.charAt(uniqueIndex))) {
      set.add(s.charAt(uniqueIndex));
      uniqueIndex++;
      longest = Math.max(longest, set.size);
    } else {
      set.delete(s.charAt(duplicateIndex));
      duplicateIndex++;
    }
  }

  return longest;
}
