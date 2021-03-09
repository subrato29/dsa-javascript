//time complexity: O(n2)
//space complexity: O(1)

function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if(array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++;
    }
		return array;
}

function swap(presentIndex, nextIndex, array) {
		const temp = array[nextIndex];
		array[nextIndex] = array[presentIndex];
		array[presentIndex] = temp;
}