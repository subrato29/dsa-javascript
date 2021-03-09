
/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

Example 3:
Input: nums = [0]
Output: [0]

xample 4:
Input: nums = [1]
Output: [1]
 */
function sortColor(nums) {
    let i = 0;
    let zeroPos = 0;
    let twoPos = nums.length - 1;
    while (i <= twoPos) {
        if (nums[i] == 0) {
            swap(nums, i, zeroPos);
            zeroPos++;
            i++;
        } else if (nums[i] == 2) {
            swap(nums, i, twoPos);
            twoPos--;
        } else {
            i++
        }
    }
}

function swap(nums, index1, index2) {
    let temp = nums[index2];
    nums[index2] = nums[index1];
    nums[index1] = temp;
}