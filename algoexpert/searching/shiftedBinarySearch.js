// time-complexity: O(log(n))
//space-complexity: O(1)

function shiftedBinarySearch(array, target) {
    return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let potentialMatch = array[mid];
        let leftNum = array[left];
        let rightNum = array[right];
        if (potentialMatch === target) {
            return mid;
        } else if(leftNum <= potentialMatch) {
            if(target >= leftNum && target < potentialMatch) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(target <= rightNum && target > potentialMatch) {
                left = mid + 1;
            } else {
                right = mid - 1;
            } 
        }
    }
    return -1;
}

let array = [5, 1, 3];
console.log(shiftedBinarySearch(array, 3));