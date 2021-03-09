//time complexity: O(n2)
//space complexity: O(1)

function insertionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let currentIndex = i;
        while(currentIndex > 0 && array[currentIndex] < array[currentIndex - 1]) {
            swap(currentIndex, currentIndex - 1, array)
            currentIndex += -1;
        }
    }
    return array;
}

function swap(currentIndex, prevIndex, array) {
    const temp = array[prevIndex];
    array[prevIndex] = array[currentIndex];
    array[currentIndex] = temp;
}