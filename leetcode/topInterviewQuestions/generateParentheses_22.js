/**
 * 22. Generate Parentheses
 * Medium
 * 16.2K
 * 630
 * Companies
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 */
/**
 * Ref: https://www.youtube.com/watch?v=qBbZ3tS0McI
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    generateCombination (result, '', 0, 0, n);
    return result;
};

function generateCombination (result, combination, open, close, pair) {
    if (combination.length == pair * 2) {
        result.push(combination);
        return;
    }
    if (open < pair) {
        generateCombination (result, combination + "(", open + 1, close, pair);
    }
    if (close < open) {
        generateCombination (result, combination + ")", open, close + 1, pair);
    }
}