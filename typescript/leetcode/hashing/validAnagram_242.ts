/**
 * 242. Valid Anagram
Easy
Topics
Companies

Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

 

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  const map = new Map();

  for (const ch of s) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  for (const ch of t) {
    if (map.has(ch) && map.get(ch) > 0) {
      map.set(ch, map.get(ch) - 1);
    } else {
      return false;
    }
  }

  return true;
}
