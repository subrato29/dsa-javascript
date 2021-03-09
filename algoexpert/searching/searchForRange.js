//timecomplexity: O(logn)
//spacecomplexity: O(1)
function searchForRange(array, target) {
    let finalRange = [-1, -1];
    helper(array, target, 0, array.length - 1, finalRange, true);
    helper(array, target, 0, array.length - 1, finalRange, false);
    return finalRange;
}

function helper(array, target, left, right, finalRange, goLeft) {
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        // validating where target != array[mid]
        if (target > array[mid]) {
            left = mid + 1;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            // validating where target == array[mid]
            if(goLeft) {
                if(array[mid - 1] !== target || mid === 0) {
                    finalRange[0] = mid;
                    return; 
                } else {
                    right = mid - 1;
                }
            } else{
                if(array[mid + 1] !== target || mid === array.length - 1) {
                    finalRange[1] = mid;
                    return;
                } else {
                    left = mid + 1;
                }
            }
        }
    }
}