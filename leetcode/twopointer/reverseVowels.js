/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

var reverseVowels = function(s) {
    let vowels = [...'aeiouAEIOU'];
    let arr = [...s];
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (!vowels.includes(arr[i])) {
            i++;
            continue;
        }
        if (!vowels.includes(arr[j])) {
            j--;
            continue;
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};