/**
 * 242. Valid Anagram
Easy

5145

218

Add to List

Share
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let map = new Map ();
    for (const ch of s) {
        if (map.has (ch)) {
            map.set (ch, map.get (ch) + 1);
        } else {
            map.set (ch, 1);
        }
    }
    for (const ch of t) {
        if (!map.has (ch) || map.get (ch) == 0) {
            return false;
        }
        map.set (ch, map.get (ch) - 1);
    }
    return true;
};