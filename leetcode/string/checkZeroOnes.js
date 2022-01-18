/**
 * 1869. Longer Contiguous Segments of Ones than Zeros
Easy

239

6

Add to List

Share
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

Example 1:
Input: s = "1101"
Output: true
Explanation:
The longest contiguous segment of 1s has length 2: "1101"
The longest contiguous segment of 0s has length 1: "1101"
The segment of 1s is longer, so return true.

Example 2:
Input: s = "111000"
Output: false
Explanation:
The longest contiguous segment of 1s has length 3: "111000"
The longest contiguous segment of 0s has length 3: "111000"
The segment of 1s is not longer, so return false.

Example 3:
Input: s = "110100010"
Output: false
Explanation:
The longest contiguous segment of 1s has length 2: "110100010"
The longest contiguous segment of 0s has length 3: "110100010"
The segment of 1s is not longer, so return false.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    if (s.indexOf ('1') == -1 && s.indexOf ('0') == -1) {
        return false;
    }
    if (s.indexOf ('1') == -1 && s.indexOf ('0') != -1) {
        return false;
    }
    if (s.indexOf ('1') != -1 && s.indexOf ('0') == -1) {
        return true;
    }
    let lengthOfOne = 1;
    let lengthOfZero = 1;
    let counter = 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) == '1' && s.charAt(i + 1) == '1') {
            counter++;
        } else {
            lengthOfOne = Math.max(counter, lengthOfOne);
            counter = 1;
        }
    }
    lengthOfOne = Math.max(counter, lengthOfOne);
    counter = 1;
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) == '0' && s.charAt(i + 1) == '0') {
            counter++;
        } else {
            lengthOfZero = Math.max(counter, lengthOfZero);
            counter = 1;
        }
    }
    lengthOfZero = Math.max(counter, lengthOfZero);
    if (lengthOfOne > lengthOfZero) {
        return true;
    }
    return false;
};