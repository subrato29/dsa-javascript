/**
 * 387. First Unique Character in a String
Easy

3958

171

Add to List

Share
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 */

var firstUniqChar = function(s) {
    let map = new Map();
    for (const ch of [...s]) {
        if (map.has (ch)) {
            map.set (ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    }
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (map.get (ch) == 1) {
            return i;
        }
    }
    return -1;
};