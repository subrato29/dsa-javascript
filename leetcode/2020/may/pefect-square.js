////////////////////////////////////////////////////////////////////////

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true

var isPerfectSquare = function(num) {
    let bool = false;
    for (let i = 0; i <= num; i++) {
        if (i * i === num) {
            bool = true;
            break;
        }
    }
    return bool;
}
console.log (isPerfectSquare(4))