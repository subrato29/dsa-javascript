
let arr = [2, 3, 4, 6, 9, 34, 45];

let binarySearch = (arr, ele) => {
	let low = 0;
	let high = arr.length - 1;
	let mid = 0;

	while (low <= high) {
		mid = low + (high - low)/2;
		if (arr[mid] === ele) {
			return mid;
			break;
		}
		if (arr[mid] < ele) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return -1;
}

console.log (binarySearch (arr, 6))