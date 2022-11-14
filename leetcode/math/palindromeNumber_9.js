/**
 * Given an integer x, return true if x is a
 * palindrome
 * , and false otherwise.
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

 var isPalindrome = function(x) {
    if (x == 0) {
        return true;
    }
    if (x < 0 || x % 10 == 0) {
        return false;
    }
    let actual = x;
    let reverse = 0;
    while (x > 0) {
        let remainder = x % 10;
        x = Math.floor (x / 10);
        reverse = (reverse * 10) + remainder;
    }
    if (actual == reverse) {
        return true;
    }
    return false;
};