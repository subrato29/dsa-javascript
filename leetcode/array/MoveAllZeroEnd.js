function solution (nums) {
    if (nums === null) {
        return [];
    }
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++
        }
        i++;
    }
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
    return nums;
}