
/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Input:s1= "ab" s2 = "eidboaoo"
Output: False
*/


let s1 = 'ab';
let s2 = 'eidboaoo';
let permuResultant = [];
let bool = false;

let findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

let checkInclusion = (s1, s2) => {
	for (var i = 0; i < findPermutations (s1).length; i++) {
		if (s2.includes(findPermutations (s1) [i])){
			bool = true;
			break;
		}	
	}
	return bool;
}

console.log (checkInclusion (s1, s2));
