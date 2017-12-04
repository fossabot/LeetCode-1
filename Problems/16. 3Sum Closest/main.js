/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 102ms 97.50%
 * @description
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const threeSum1 = function threeSum(nums, target) {
  let ret = 0;
  const length = nums.length;
  if (length < 3) {
    return ret;
  }

  const sortFunc = (a, b) => a - b;
  nums.sort(sortFunc);
  let closestDist = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < length - 2; i += 1) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let l = i + 1;
      let r = length - 1;
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum < target) {
          if (target - sum < closestDist) {
            closestDist = target - sum;
            ret = sum;
          }
          l += 1;
        } else if (sum > target) {
          if (sum - target < closestDist) {
            closestDist = sum - target;
            ret = sum;
          }
          r -= 1;
        } else {
          return sum;
        }
      }
    }
  }
  return ret;
};

console.log(threeSum1([-1, 2, 1, -4], 4));
