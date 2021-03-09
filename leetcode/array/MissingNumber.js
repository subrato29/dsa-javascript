/**
 * Created by gouthamvidyapradhan on 04/07/2017. Given an array containing n distinct numbers taken
 * from 0, 1, 2, ..., n, find the one that is missing from the array.
 *
 * <p>For example, Given nums = [0, 1, 3] return 2.
 *
 * <p>Note: Your algorithm should run in linear runtime complexity. Could you implement it using
 * only constant extra space complexity?
 */

 let solution = function(arr) {
 	for (let i = 0; i < arr.length - 1; i++) {
 		if (arr[i] + 1 != arr[i + 1]) {
 			return arr[i] + 1;
 		}
 	}
 	return 0;
 }

 let arr = [1, 2, 3, 5, 6, 7, 8];
 console.log(solution(arr));