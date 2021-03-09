//timecomplexity: O(logn)
//spacecomplexity: O(1)

function indexEqualsValue(array) {
    return helper(array, 0, array.length - 1);
}

function helper(array, left, right) {
    while (left <= right) {
        let midIndex = Math.floor(left + (right - left) / 2);
        let midValue = array[midIndex];
        if (midValue < midIndex) {
            left = midIndex + 1;
        } else if (midValue === midIndex && midIndex === 0) {
            return midIndex;
        } else if (midValue === midIndex && array[midIndex - 1] < midIndex - 1) {
            return midIndex;
        } else if (midValue === midIndex && midIndex === array.length - 1) {
            return midIndex;
        } else if (midValue === midIndex && array[midIndex + 1] > midIndex + 1) {
            return midIndex;
        } else {
            right = midIndex - 1;
        }
    }
    return -1;
}