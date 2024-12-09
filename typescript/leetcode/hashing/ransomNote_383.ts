/**
 * 383. Ransom Note

Easy
Topics
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

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

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();

  for (const ch of magazine) {
    map.has(ch) ? map.set(ch, map.get(ch) + 1) : map.set(ch, 1);
  }

  for (const ch of ransomNote) {
    if (!map.has(ch) || map.get(ch) == 0) {
      return false;
    }
    map.set(ch, map.get(ch) - 1);
  }

  return true;
}
