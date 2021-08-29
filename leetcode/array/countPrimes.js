/**
 * 204. Count Primes
Easy

3702

869

Add to List

Share
Count the number of prime numbers less than a non-negative number, n.

Example 1:
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:
Input: n = 0
Output: 0

Example 3:
Input: n = 1
Output: 0
 */
var countPrimes = function(n) {
    let notPrime = [n];
    let counter = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            counter++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return counter;
};