/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

let arr = ["h","e","l","l","o"];
let resultant = [];

let reverseString = function(s) {
	for (var i = s.length - 1; i >= 0; i--) {
		resultant.push (s[i]);
	}
	return resultant;
}

console.log (reverseString (arr))