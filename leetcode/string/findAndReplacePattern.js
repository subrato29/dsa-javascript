/**
 * 890. Find and Replace Pattern
Medium

1742

115

Add to List

Share
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

Example 1:
Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

Example 2:
Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
 */
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let list = [];
    for (const word of words) {
        if (matcher (word, pattern)) {
            list.push (word);
        }
    }
    return list;
};

function matcher (word, pattern) {
    let wordMap = new Map ();
    let patternMap = new Map ();
    for (let i = 0; i < word.length; i++) {
        const w = word.charAt (i);
        const p = pattern.charAt (i);
        if (!wordMap.has (w)) {
            wordMap.set (w, p);
        }
        if (!patternMap.has (p)) {
            patternMap.set (p, w);
        }
        if (wordMap.get (w) != p || patternMap.get (p) != w) {
            return false;
        }
    }
    return true;
}