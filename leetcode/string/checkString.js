/**
 * 2124. Check if All A's Appears Before All B's
Easy

165

1

Add to List

Share
Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

Example 1:
Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.

Example 2:
Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.

Example 3:
Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = function(s) {
    let set = new Set();
    for (const ch of s) {
        set.add (ch);
    }
    if (set.size == 1) {
        return true;
    }
    let bool = false;
    for (const ch of s) {
        if (ch == 'b') {
            bool = true;
        } else if (bool == true && ch == 'a') {
            return false;
        }
    }
    return true;
};