function increasingTriplet (nums) {
    if (nums === null || nums.length < 3) {
        return false;
    }
    let smallest = Number.MAX_SAFE_INTEGER;
    let middle = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (smallest >= nums[i]) {
            smallest = nums[i];
        } else if (middle >= nums[i]) {
            middle = nums[i];
        } else {
            return true;
        }
    }
    return false;
}