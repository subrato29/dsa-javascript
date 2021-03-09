/**
 * We are given two strings, A and B.

	A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
	
	Example 1:
	Input: A = 'abcde', B = 'cdeab'
	Output: true
	
	Example 2:
	Input: A = 'abcde', B = 'abced'
	Output: false
 */

let solution =  (string1, string2) => {
    let beginIndexChar = string2.charAt(0);
    let i = string1.indexOf(beginIndexChar);

    let begin = 0;
    let newString1 = "";
    while (begin < i) {
        newString1 = newString1 + string1.charAt(begin);
        begin++;
    }
    let newString = "";
    while(i < string1.length) {
        newString = newString + string1.charAt(i);
        i++;
    }
    newString = newString + newString1;
    console.log(newString + '-------' + string2);
    return(newString === string2);
 }

 console.log(solution('abcde', 'cdeab'));