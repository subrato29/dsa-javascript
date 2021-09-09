/**
 * 680. Valid Palindrome II
Easy

3157

195

Add to List

Share
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 */

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            if (helper(s, left, right - 1)) {
               return true;
            }
            if (helper(s, left + 1, right)) {
               return true;
            }
            return false;
        }else {
            left++;
            right--;
        }
    }
    return true;
};

function helper(string, left, right) {
    while (left < right) {
        if (string.charAt(left) != string.charAt(right)) {
            return false;
        }
        left++;
        right--;   
    }
    return true;
}