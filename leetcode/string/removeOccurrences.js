/**
 * 1910. Remove All Occurrences of a Substring
Medium

517

30

Add to List

Share
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.

Example 1:
Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".

Example 2:
Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".
 */
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
 var removeOccurrences = function(s, part) {
    let sb = '';
    const partLength = part.length;
    while (s.indexOf (part) > -1) {
        if (s == part) {
            return "";
        }
        const index = s.indexOf (part);
        if (index == 0) {
            sb += s.substring (partLength, s.length);
        } else {
            const part1 = s.substring (0, index);
            const part2 = s.substring (part1.length + partLength, s.length);
            sb += part1 + part2;
        }
        s = sb;
        sb = '';
    }
    return s;
};