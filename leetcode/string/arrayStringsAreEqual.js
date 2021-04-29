/**
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
 */

var arrayStringsAreEqual = function(word1, word2) {
    let string1 = '';
    for (let i = 0; i < word1.length; i++) {
        string1 += word1[i];
    }
    let string2 = '';
    for (let i = 0; i < word2.length; i++) {
        string2 += word2[i];
    }
    if (string1 === string2) {
        return true;
    }
    return false;
};