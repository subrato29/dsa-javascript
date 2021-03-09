
function longestPeak(array) {
  let longest = 0;
	let i = 1;
	while (i < array.length) {
		let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
		if (!isPeak) {
			i++;
			continue;
		}
		let left = i - 2;
		while (left >= 0 && array[left] < array[left + 1]) {
			left--;
		}
		let right = i + 2;
		while (right < array.length && array[right - 1] > array[right]) {
			right ++;
		}
		let currentPeakLength = right - left - 1;
		if (currentPeakLength > longest) {
			longest = currentPeakLength;
		}
		i = right;
	}
	return longest;
}