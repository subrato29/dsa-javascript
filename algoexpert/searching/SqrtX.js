/**
 * Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 */

//timecomplexity: O(logn)
//spacecomplexity: O(1)
function mySqrt(num) {
    if (num === 1) {
        return 1;
    }
    let start = 0;
    let end = Math.floor(num / 2);
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(mid * mid === num) {
            return mid;
        } else if (mid * mid < num) {
            start = mid + 1;
        } else if (mid * mid > num){
            end = mid - 1;
        }
    }
    return Math.floor(start - 1);
}