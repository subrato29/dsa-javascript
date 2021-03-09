function getKeyByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
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

console.log ('before sorting by value....')
console.log (unsortedMap);

let nums = [];
let result = [];
let sortedMap = new Map();

let iterator = unsortedMap.values();

for (let i = 0; i < unsortedMap.size; i++) {
	nums.push (iterator.next().value);
}

result = nums.sort();

for (let i = 0; i < result.length; i++) {
	let value = result[i];
	let key = getKeyByValue (unsortedMap, value);
	sortedMap.set(key, value);
}

console.log ('After sorting by keys....')
console.log (sortedMap)
