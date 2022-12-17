/**
 * 28. Find the Index of the First Occurrence in a String
 * Medium
 * 1.1K
 * 83
 * Companies
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 *Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * Example 2:
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    let haystackPointer = 0;
    let needlePointer = 0;
    while (haystackPointer < haystack.length && needlePointer < needle.length) {
        if (haystack.charAt(haystackPointer) == needle.charAt(needlePointer)) {
            needlePointer++;
            if (needlePointer == needle.length) {
                return haystackPointer - needlePointer + 1;
            }
        } else {
            haystackPointer = haystackPointer - needlePointer;
            needlePointer = 0;
        }
        haystackPointer++;
    }
    return -1;
};