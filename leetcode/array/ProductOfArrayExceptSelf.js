/**
 * Created by gouthamvidyapradhan on 04/05/2017.
 *
 * <p>Given an array of n integers where n > 1, nums, return an array output such that output[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * <p>Solve it without division and in O(n).
 *
 * <p>For example, given [1,2,3,4], return [24,12,8,6].
 *
 * <p>Follow up: Could you solve it with constant space complexity? (Note: The output array does not
 * count as extra space for the purpose of space complexity analysis.)
 */

 let solution = (array) => {
 	let result = new Array(array.length);
 	for (var i = 0; i < array.length; i++) {
 		result[i] = helper(array, array[i]);
 	}
 	return result;
 }

 let helper = (array, notIncludedNo) => {
 	let temp = 1;
 	for (var i = array.length - 1; i >= 0; i--) {
 		if (array[i] != notIncludedNo) {
 			temp = temp * array[i];
 		}
 	}
 	return temp;
 }

 console.log (solution([1, 2, 3, 4]));