/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description
 * @description 79ms 90.76%
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert1 = function searchInsert(nums, target) {
  const index = nums.indexOf(target);
  if (index === -1) {
    const length = nums.length;
    if (target < nums[0]) {
      return 0;
    } else if (target > nums[length - 1]) {
      return length;
    }
    for (let i = 0; i < length - 1; i += 1) {
      if (target > nums[i] && target < nums[i + 1]) {
        return i + 1;
      }
    }
  }
  return index;
};

console.log(searchInsert1([1, 3, 5, 6], 0));
