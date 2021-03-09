
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Find All Anagrams in a String

let isAnagram = function (str1, str2) {
  const hist = {}

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]
    if (hist[char]) { 
      hist[char] ++
    } else {
      hist[char] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j]
    if (hist[char]) {
      hist[char] --
    } else {
      return false
    }
  }

  return true
}


let s = 'abcbdcabd';
let p = 'ab';
let resultant = [];
let temp;

var findAnagrams = function(s, p) {
    for (var i = 0; i <= s.length; i++) {
        if (i + p.length < s.length) {
            temp = s.substring(i, i + p.length);
        }
        if (isAnagram (temp, p)) {
            if (i < s.length) {
                resultant.push(i);
            }
        }
    }
    return resultant;
};

console.log (findAnagrams(s, p));