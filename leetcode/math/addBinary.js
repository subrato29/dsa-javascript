/**
 * 67. Add Binary
Easy

3412

402

Add to List

Share
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 */

var addBinary = function(a, b) {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a.charAt(i--) - '0';
        }
        if (j >= 0) {
            sum += b.charAt(j--) - '0';
        }
        result = Math.floor(sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
};