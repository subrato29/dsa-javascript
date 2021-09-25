/**
 * 819. Most Common Word
Easy

1094

2284

Add to List

Share
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:
Input: paragraph = "a.", banned = []
Output: "a"
 */

var mostCommonWord = function(paragraph, banned) {
    let bannedWords = new Set();
    for (let i = 0; i < banned.length; i++) {
        bannedWords.add (banned[i]);
    }
    let paraWords = new Map();
    paragraph = paragraph.toLowerCase().replace(/[^a-zA-Z]/g, ' ');
    let array = paragraph.split(' ');
    for (const word of array) {
        if (!bannedWords.has(word) && word.length != 0) {
            if (paraWords.has(word)) {
                paraWords.set(word, paraWords.get(word) + 1);
            } else {
                paraWords.set(word, 1);
            }
        }
    }
    let maxCount = 0;
    let result = '';
    for (const [key, value] of paraWords) {
        let value = paraWords.get(key);
        if (value > maxCount) {
            maxCount = value;
            result = key;
        }
    }
    return result;
};