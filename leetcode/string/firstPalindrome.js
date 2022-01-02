/**
 * /**
 * 2108. Find First Palindromic String in the Array
Easy

139

7

Add to List

Share
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

Example 1:
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
 */
 
/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    if (words == null || words.length == 0) {
        return "";
    }
    for (const word of words) {
        if (validatePalindrome (word)) {
            return word;
        }
    }
    return '';
};

function validatePalindrome (string) {
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string.charAt(i) != string.charAt(j)) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}