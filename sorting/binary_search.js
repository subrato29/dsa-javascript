
let binarySort = (arr) => {
	let temp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if (i === j) continue;
			if (arr[i] < arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}	
	}
	return arr
}

let arr = [10, 9, 7, 101, 23, 44, 12, 78, 34, 23];

console.log (binarySort(arr))