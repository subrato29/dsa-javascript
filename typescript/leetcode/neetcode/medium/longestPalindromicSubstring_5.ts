/**
 * 5. Longest Palindromic Substring
 *
 * Medium 26.6K 1.6K Companies Given a string s, return the longest palindromic
 *
 * substring in s.
 *
 *
 * Example 1: Input: s = "babad" Output: "bab" Explanation: "aba" is also a valid answer.
 *
 * Example 2: Input: s = "cbbd" Output: "bb"
 */

function longestPalindrome(s: string): string {
  let longest: string = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    let currentSubStringLength: string = helper(s, i - 1, i + 1);
    if (longest.length < currentSubStringLength.length) {
      longest = currentSubStringLength;
    }

    currentSubStringLength = helper(s, i - 1, i);
    if (longest.length < currentSubStringLength.length) {
      longest = currentSubStringLength;
    }
  }
  return longest;
}

function helper(s: string, startIndex: number, endIndex: number) {
  while (startIndex >= 0 && endIndex < s.length) {
    if (s.charAt(startIndex) != s.charAt(endIndex)) {
      break;
    }
    startIndex--;
    endIndex++;
  }

  return s.substring(startIndex + 1, endIndex);
}
