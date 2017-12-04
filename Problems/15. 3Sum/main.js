/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description Error
 * @description
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum1 = function threeSum(nums) {
  const results = [];
  const founded = [];
  const length = nums.length;
  if (length < 3) {
    return results;
  }
  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i += 1) {
    for (let j = i + 1; j < length; j += 1) {
      const third = 0 - nums[i] - nums[j];
      const index = nums.indexOf(third);
      if (!(index === -1 || index === i || index === j)) {
        // 找到
        results.push([nums[i], nums[j], nums[index]]);
        founded.push(nums[index]);
      }
    }
  }

  return results;
};

/**
 * @version 2.0.0
 * @description 279ms 84.14%
 * @description
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum2 = function threeSum(nums) {
  const length = nums.length;
  const results = [];
  if (length < 3) {
    return results;
  }

  const sortFunc = (a, b) => a - b;
  nums.sort(sortFunc);
  let target;
  let l;
  let r;
  let temp;
  for (let i = 0; i < length - 2; i += 1) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      target = 0 - nums[i];
      l = i + 1;
      r = length - 1;
      while (l < r) {
        if (nums[l] + nums[r] === target) {
          results.push([nums[i], nums[l], nums[r]]);
          temp = nums[l];
          while (l < r && nums[l] === temp) l += 1;
          temp = nums[r];
          while (l < r && nums[r] === temp) r -= 1;
        } else if (nums[l] + nums[r] < target) l += 1;
        else r -= 1;
      }
    }
  }
  return results;
};

console.log(threeSum1([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
console.log(threeSum2([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
