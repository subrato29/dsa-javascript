/**
 * 17. Letter Combinations of a Phone Number
Medium

8002

600

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let result = [];
    if (digits == null || digits.length == 0) {
        return result;
    }
    let mapping = [
        "0",
        "1",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"   
    ];
    letterCombinationsHelper (result, digits, "", 0, mapping);
    return result;
};

function letterCombinationsHelper (result, digits, current, index, mapping) {
    if (index == digits.length) {
        result.push (current);
        return;
    }
    let letters = mapping[digits.charAt(index) - '0'];
    for (let i = 0; i < letters.length; i++) {
        letterCombinationsHelper (result, digits, current + letters.charAt(i), index + 1, mapping);
    }
}