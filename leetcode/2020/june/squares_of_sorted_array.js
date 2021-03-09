/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

let nums = [-4,-1,0,3,10];

var sortedSquares = function(nums) {
	let resultant = [];
    for (var i = 0; i < nums.length; i++) {
    	resultant.push(nums[i] * nums[i]);
    }
    return resultant.sort(function (a, b) {
    	return a - b;
    });
};

console.log (sortedSquares(nums))