function twoNumberSum(array, target) {
  let map = new Map();
	for (let i = 0; i < array.length; i++) {
		let resultant = target - array[i];
		if (map.has(resultant)) {
			return [array[i], resultant];
		} else {
			map.set(array[i], resultant);
		}
	}
	return [];
}
