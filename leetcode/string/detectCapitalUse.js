/**
 * 520. Detect Capital
Easy

926

308

Add to List

Share
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false
 */

var detectCapitalUse = function(word) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        if (ch === ch.toUpperCase()) {
            counter++;
        }
    }
    return counter === word.length || counter === 0 || counter === 1 && (word.charAt(0) === word.charAt(0).toUpperCase());
};