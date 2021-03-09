
let arr = [-3,-1,0,0,0,3,3];

let removeDuplicates = function(nums) {
	let duplicate;
	for (var i = 0; i < nums.length - 1; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				duplicate = nums[i];
				nums.splice(i, 1)
				break;
			}
		}
		if (nums[i + 1] === duplicate) {
			i --;
		}
	}
	return nums;
};

console.log (removeDuplicates(arr))