/**
 * 1304. Find N Unique Integers Sum up to Zero
Easy

706

366

Add to List

Share
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]
 */

var sumZero = function(n) {
    let arr = [];
    for (let i = 1; i <= n / 2; i++) {
        arr.push(i);
        arr.push(-i);
    }
    if (n % 2 != 0) {
        arr.push(0);
    }
    return arr;
};