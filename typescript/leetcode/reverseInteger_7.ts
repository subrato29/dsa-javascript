/**
 * 7. Reverse Integer
Medium

6598

9294

Add to List

Share
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 */

function reverse(x: number): number {
  const actual: number = x;
  const INT_MAX = 2 ** 31 - 1;

  if (x < 0) {
    x = x * -1;
  }

  let reverse: number = 0;

  while (x > 0) {
    const remainder: number = x % 10;
    x = Math.floor(x / 10);
    reverse = reverse * 10 + remainder;
  }
  if (reverse > INT_MAX) {
    return 0;
  }
  reverse = actual < 0 ? reverse * -1 : reverse;

  return reverse;
}
