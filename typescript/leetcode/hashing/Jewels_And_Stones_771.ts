/**
 * 771. Jewels and Stones
Easy

2791

432

Add to List

Share
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 */

function numJewelsInStones(jewels: string, stones: string): number {
  const map = new Map();

  for (const ch of stones) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  let counter: number = 0;

  for (const ch of jewels) {
    if (map.has(ch)) {
      counter += map.get(ch);
    }
  }

  return counter;
}
