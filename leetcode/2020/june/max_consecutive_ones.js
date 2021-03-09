//  Max Consecutive Ones

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

let arr = [1,0,1,1,0,1];
let count = 0;
let resultant = [];

var findMaxConsecutiveOnes = function (nums) {
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count ++;
		}
		if ((nums[i] != 1) || (i === nums.length - 1)) {
			resultant.push (count);
			count = 0;
		}
	}
	return resultant;
};

let findMaxNum = function (nums) {
	let max = nums[0]
	for (var i = 0; i < nums.length; i++) {
		if (max < nums[i]) {
			max = nums[i]
		}
	}
	return max;
};


console.log (findMaxNum(findMaxConsecutiveOnes(arr)))