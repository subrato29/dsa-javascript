/**
 * 20. Valid Parentheses
 * Easy
 * 17.1K
 * 893
 * Companies
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = new Map ();
    map.set ('(', ')');
    map.set ('{', '}');
    map.set ('[', ']');
    let stack = [];
    for (const ch of s) {
        if (map.has (ch)) {
            stack.push (ch);
        } else if ([...map.values()].includes (ch)) {
            if (stack.length > 0 && map.get (stack[stack.length - 1]) == ch) {
                stack.pop ();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
};