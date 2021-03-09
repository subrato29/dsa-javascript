function maxConsecutiveOnes(nums) {
    if (nums == null) {
        return 0;
    }
    let counter = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
        } else {
            counter = 0;
        }
        maxLength = Math.max (maxLength, counter);
    }
    return maxLength;
}