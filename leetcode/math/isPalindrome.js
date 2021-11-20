/**
 * 9. Palindrome Number
Easy

4416

1920

Add to List

Share
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false
 */

var isPalindrome = function(x) {
    if (x == 0) {
        return true;
    }
    if (x < 0 || x % 10 == 0) {
        return false;
    }
    const original = x;
    let reverse = 0;
    while (x > 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        reverse = (reverse * 10) + pop;
    }
    if (original != reverse) {
        return false;
    }
    return true;
};