/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 106ms, 32.7%
 * @description Too slow.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement1 = function removeElement(nums, val) {
  let length = nums.length;
  if (length === 0) {
    return 0;
  }

  for (let i = 0; i < length; i += 1) {
    console.log(nums[i]);
    if (nums[i] === val) {
      nums.splice(i, 1);
      length -= 1;
      i -= 1;
    }
  }
  return length;
};

/**
 * @version 2.0.0
 * @description 95ms
 * @description 51.05%
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement2 = function removeElement(nums, val) {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  const left = nums.indexOf(val);
  if (left === -1) {
    return nums.length;
  }
  const right = nums.lastIndexOf(val);
  nums.splice(left, (right - left) + 1);
  return nums.length;
};

removeElement1([2, 3, 4], 6);
removeElement2([2], 3);
