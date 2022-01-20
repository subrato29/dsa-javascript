/**
 * 1796. Second Largest Digit in a String
Easy

211

65

Add to List

Share
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 */
/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
    let set = new Set();
    for (const ch of s) {
        if (!(/[a-zA-Z]/).test(ch)) {
            set.add (ch);
        }
    }
    if (set.size == 1 || set.size == 0) {
        return -1;
    }
    let arr = [...set];
    arr.sort ((a, b) => a - b);
    return arr[arr.length - 2];
};