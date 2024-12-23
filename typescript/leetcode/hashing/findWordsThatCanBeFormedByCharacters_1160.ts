/**
 * 1160. Find Words That Can Be Formed by Characters
 * 
 * You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 */

function countCharacters(words: string[], chars: string): number {
  let length: number = 0;

  for (const word of words) {
    if (isCharFormedByWord(word, chars)) {
      length += word.length;
    }
  }

  return length;
}

function charWiseCount(word: string) {
  const map = new Map();

  for (const ch of word) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  return map;
}

function isCharFormedByWord(word: string, chars: string) {
  const mapOfWord = charWiseCount(word);
  const mapOfChars = charWiseCount(chars);

  for (const ch of word) {
    if (mapOfChars.has(ch)) {
      if (mapOfWord.get(ch) > mapOfChars.get(ch)) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}
