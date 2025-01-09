/**
 * 697. Degree of an Array Easy
 *
 * 1802
 *
 * 1187
 *
 * Add to List
 *
 * Share Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum
 * frequency of any one of its elements.
 *
 * Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as
 * nums.
 *
 * Example 1: Input: nums = [1,2,2,3,1] Output: 2 Explanation: The input array has a degree of 2 because both elements 1
 * and 2 appear twice. Of the subarrays that have the same degree: [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2,
 * 2], [2, 2, 3], [2, 2] The shortest length is 2. So return 2.
 *
 * Example 2: Input: nums = [1,2,2,3,1,4,2] Output: 6 Explanation: The degree is 3 because the element 2 is repeated 3
 * times. So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 */

function findShortestSubArray(nums: number[]): number {
  const frequencyMap = new Map();
  const firstSeen = new Map();
  let degree = 0;
  let minLength = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }

    if (!firstSeen.has(num)) {
      firstSeen.set(num, i);
    }

    const currentDegree = frequencyMap.get(num)!;
    if (currentDegree > degree) {
      degree = currentDegree;
      minLength = i - firstSeen.get(num) + 1;
    } else if (currentDegree === degree) {
      minLength = Math.min(minLength, i - firstSeen.get(num) + 1);
    }
  }

  return minLength;
}
