let arr = [3,2,2,3];

let removeElement = function(nums, val) {
	let count = 0;
	for (var i = 0; i < nums.length; i ++) {
		if (nums[i] === val) {
			nums.splice(i, 1)
		}
		if (nums[i] === val) {
			i --;
		}
	}
	return nums.length;
};

console.log (removeElement (arr, 3))