//time complexity: O(n)
//space complexity: O(n)

function sortedSquaredArray(array) {
    const sortedSquared = new Array(array.length).fill(0);
	let startIdx = 0;
	let endIdx = array.length - 1;
	for (let i = array.length - 1; i >= 0; i--) {
			let smallerValue = array[startIdx];
			let biggerValue = array[endIdx];
			if (Math.abs(smallerValue) > Math.abs(biggerValue)) {
					sortedSquared[i] = smallerValue * smallerValue;
					startIdx++;
			} else {
					sortedSquared[i] = biggerValue * biggerValue;
					endIdx--;
			}
	}
	return sortedSquared;
}