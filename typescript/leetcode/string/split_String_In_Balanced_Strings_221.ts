/**
 * 1221. Split a String in Balanced Strings
 *
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 *
 * Given a balanced string s, split it in the maximum amount of balanced strings.
 *
 * Return the maximum amount of split balanced strings.
 *
 * Example 1:
 *
 * Input: s = "RLRRLLRLRL" Output: 4 Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains
 * same number of 'L' and 'R'. Example 2:
 *
 * Input: s = "RLLLLRRRLR" Output: 3 Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same
 * number of 'L' and 'R'. Example 3:
 *
 * Input: s = "LLLLRRRR" Output: 1 Explanation: s can be split into "LLLLRRRR". Example 4:
 *
 * Input: s = "RLRRRLLRLL" Output: 2 Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an
 * equal number of 'L' and 'R'
 */

function balancedStringSplit(s: string): number {
  let counter: number = 0;
  let countOfBanancedString = 0;

  for (const ch of s) {
    if (ch === "R") {
      counter++;
    } else if (ch === "L") {
      counter--;
    }

    if (counter === 0) {
      countOfBanancedString++;
    }
  }

  return countOfBanancedString;
}
