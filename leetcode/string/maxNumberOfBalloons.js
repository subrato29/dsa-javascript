/**
 * 1189. Maximum Number of Balloons
Easy

616

50

Add to List

Share
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
 */

var maxNumberOfBalloons = function(text) {
    let map = new Map();
    for (let i = 0; i < text.length; i++) {
        let ch = text.charAt(i);
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        }else {
            map.set(ch, 1);
        }
    }
    let counter = Number.MAX_VALUE;

    counter = Math.floor(Math.min(counter, getOrDefault(map, 'b')));
    counter = Math.floor(Math.min(counter, getOrDefault(map, 'a')));
    counter = Math.floor(Math.min(counter, getOrDefault(map, 'l') / 2));
    counter = Math.floor(Math.min(counter, getOrDefault(map, 'o') / 2));
    counter = Math.floor(Math.min(counter, getOrDefault(map, 'n')));

    return counter;
};

function getOrDefault(map, ch) {
    if (map.has(ch)) {
        return map.get(ch);
    }
    return 0;
}