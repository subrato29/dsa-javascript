// time-complexity O(log(n)), --- space-complexity O(1)

function binarySearch(array, target) {
    return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let potentialMatch = array[middle];
        if (potentialMatch === target) {
            return middle;
        } else if (potentialMatch > target) {
            right = middle - 1;
        } else if (potentialMatch < target) {
            left = middle + 1;
        }
    }
    return -1;
}