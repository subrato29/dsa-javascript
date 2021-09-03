/**
 * 415. Add Strings
Easy

2276

442

Add to List

Share
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 */

var addStrings = function(num1, num2) {
    let result = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += num1.charAt(i) - '0';
            i--;
        }
        if (j >= 0) {
            sum += num2.charAt(j) - '0';
            j--;
        }
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    if (carry != 0) {
        result.push(carry);
    }
    return result.reverse().join('');
};