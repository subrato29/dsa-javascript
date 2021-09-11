/**
 * 242. Valid Anagram
Easy

3191

176

Add to List

Share
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */

var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        }else {
            map.set(ch, 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        let ch = t.charAt(i);
        if (!map.has(ch) || map.get(ch) == 0) {
            return false;
        }
        map.set(ch, map.get(ch) - 1);
    }
    return true;
};