/**
 * 5. Longest Palindromic Substring
 * Medium
 * 22.9K
 * 1.3K
 * Companies
 * Given a string s, return the longest
 * palindromic
 *
 * substring
 *  in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length == 1 || s == "") {
        return s;
    }
    let longest = s.substring (0, 1);
    for (let i = 0; i < s.length; i++) {
        let newSubstring = getLongest (s, i, i);
        if (longest.length < newSubstring.length) {
            longest = newSubstring;
        }
        newSubstring = getLongest (s, i - 1, i);
        if (longest.length < newSubstring.length) {
            longest = newSubstring;
        }
    }
    return longest;
};

function getLongest (s, start, end) {
    while (start >= 0 && end < s.length && s.charAt (start) == s.charAt (end)) {
        start--;
        end++;
    }
    return s.substring (start + 1, end);
}