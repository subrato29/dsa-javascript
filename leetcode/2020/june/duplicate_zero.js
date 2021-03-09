/*
Duplicate Zeros

Solution
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
*/


let arr = [1,0,2,3,0,4,5,0];

var duplicateZeros = function(arr) {
	let resultant  = [];
	let resultant1 = [];
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] === 0) {
    		resultant.push(0);
    		resultant.push(0);
    	} else { 
    		resultant.push(arr[i]);
    	}
    }
    for (var i = 0; i < arr.length; i++) {
    	resultant1.push(resultant[i]);
    }
    return resultant1;
};

console.log (duplicateZeros(arr));