/**
 * Created by gouthamvidyapradhan on 11/07/2017. Given an array of integers, return indices of the
 * two numbers such that they add up to a specific target.
 *
 * <p>You may assume that each input would have exactly one solution, and you may not use the same
 * element twice.
 *
 * <p>Example: Given nums = [2, 7, 11, 15], target = 9,
 *
 * <p>Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
 *
 * <p>Solution: O(n log n). Wrap index and element in a class and sort in increasing order. Do a two
 * pointer sum and compare. An alternative solution is to use hashing which is a O(n) solution - For
 * each element e check if element (target - e) is already found in hashset, if yes return their
 * index, else add this to hash-set and continue.
 */

 let twoSum = (arr, sum) => {
 	let map = new Map();
 	let result = 0;
 	for (var i = 0; i < arr.length; i++) {
 		result = sum - arr[i];
 		if (map.has(result)) {
 			return [map.get(result), i];
 		} else {
 			map.set(arr[i], i);
 		}
 	}
 	return [0, 0];
 }

 let arr = [2, 4, 6, 14];
 console.log (twoSum(arr, 10));