/**
 * 917. Reverse Only Letters
Easy

977

46

Add to List

Share
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 */

var reverseOnlyLetters = function(s) {
    let arr = [...s];
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (isCharacterALetter(arr[start])) {
            if (isCharacterALetter(arr[end])) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }else {
                end--;
            }
        }else {
            start++;
        }
    }
    return arr.join('');
};

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}