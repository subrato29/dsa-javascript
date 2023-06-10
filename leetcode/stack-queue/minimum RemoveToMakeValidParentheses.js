/**
 * 1249. Minimum Remove to Make Valid Parentheses Medium
 *
 * 3621
 *
 * 69
 *
 * Add to List
 *
 * Share Given a string s of '(' , ')' and lowercase English characters.
 *
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting
 * parentheses string is valid and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 *
 * It is the empty string, contains only lowercase characters, or It can be written as AB (A concatenated with B), where
 * A and B are valid strings, or It can be written as (A), where A is a valid string.
 *
 * Example 1: Input: s = "lee(t(c)o)de)" Output: "lee(t(c)o)de" Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also
 * be accepted.
 *
 * Example 2: Input: s = "a)b(c)d" Output: "ab(c)d"
 *
 * Example 3: Input: s = "))((" Output: "" Explanation: An empty string is also valid.
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let string = "";
  let open = 0;
  for (const ch of s) {
    if (ch == "(") {
      open++;
    } else if (ch == ")") {
      if (open == 0) continue;
      open--;
    }
    string += ch;
  }
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (string.charAt(i) == "(" && open-- > 0) continue;
    result += string.charAt(i);
  }
  return [...result].reverse().join("");
};
