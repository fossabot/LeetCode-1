/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description Wrong Answer 不知道为什么, 也许是 LeetCode 禁止使用 Array.from?
 * @description 理解错题目了, 题目要求在原数组上修改, 返回结果数组的长度
 * @param {number[]} nums
 * @return {number[]}
 */
const removeDuplicates1 = function removeDuplicates(nums) {
  const set = new Set(nums);
  const result = Array.from(set);
  return result;
};

/**
 * @version 2.0.0
 * @description 好失败...
 * @description 275ms 20.19%
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

/**
 * @version 2.0.1
 * @description 还是好失败...
 * @description 235ms 32.79%
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates201 = function removeDuplicates(nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};


/**
 * @version 3.0.0
 * @description 仔细读题, 可以不用缩减数组
 * @description 116ms 85.62%
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates3 = function removeDuplicates(nums) {
  const length = nums.length;
  if (length < 2) {
    return length;
  }

  let index = 0;
  for (let i = 0; i < length; i += 1) {
    if (nums[i] !== nums[index]) {
      index += 1;
      // eslint-disable-next-line no-param-reassign
      nums[index] = nums[i];
    }
  }
  return index + 1;
};


removeDuplicates1([1, 1, 2]);
removeDuplicates2([1, 1, 1]);
removeDuplicates201([1, 1, 1]);
removeDuplicates3([1, 1, 1]);
