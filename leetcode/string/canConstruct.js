/**
 * 383. Ransom Note
Easy

1071

256

Add to List

Share
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        let ch = magazine.charAt(i);
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        }else {
            map.set(ch, 1);
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        let ch = ransomNote.charAt(i);
        if (!map.has(ch) || map.get(ch) == 0) {
            return false;
        }
        map.set(ch, map.get(ch) - 1);
    }
    return true;
};