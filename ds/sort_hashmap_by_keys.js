
function sorting (a, b) {
	return (a - b);
}

// Sorting hashmap by keys
let unsortedMap = new Map();
unsortedMap.set(5, "A");
unsortedMap.set(11, "C");
unsortedMap.set(4, "Z");
unsortedMap.set(77, "Y");
unsortedMap.set(9, "P");
unsortedMap.set(66, "Q");
unsortedMap.set(0, "R");

console.log ('before sorting by keys....')
console.log (unsortedMap);

let nums = [];
let result = [];
let sortedMap = new Map();

let iterator = unsortedMap.keys();

for (let i = 0; i < unsortedMap.size; i++) {
	nums.push (iterator.next().value);
}

result = nums.sort (sorting);

let count = 0;
while (count < result.length) {
	let key = result[count];
	let value = unsortedMap.get(key);
	sortedMap.set (key, value)
	count++;
}

console.log ('after sorting by keys....')
console.log (sortedMap);