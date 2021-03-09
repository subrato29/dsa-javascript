//time: O(N) where N = no of elements in original array + elements in subarray or 'special' array
//space: O(d) where d is greatest depth of 'special' array;
function productSum(array, multiplier = 1) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum = sum + productSum (array[i], multiplier + 1)
		} else {
			sum = sum + array[i];
		}
	}
	return sum * multiplier;
}