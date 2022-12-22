/**
 * 49. Group Anagrams
 * Medium
 * 13.6K
 * 402
 * Companies
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (const str of strs) {
        const arr = [...str].sort();
        const sorted = arr.join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }
    return ([...map.values()]);
};