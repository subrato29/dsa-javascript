/**
 * 1446. Consecutive Characters
Easy

620

17

Add to List

Share
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Example 3:
Input: s = "triplepillooooow"
Output: 5

Example 4:
Input: s = "hooraaaaaaaaaaay"
Output: 11

Example 5:
Input: s = "tourist"
Output: 1
 */

var maxPower = function(s) {
    let power = 1;
    let counter = 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            counter++;
        }else {
            counter = 1;
        }
        power = Math.max(power, counter);
    }
    return power;
};