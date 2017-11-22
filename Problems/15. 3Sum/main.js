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
 * @description
 * @description
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum2 = function threeSum(nums) {
  const results = [];
  const resultsStr = [];
  const length = nums.length;
  if (length < 3) {
    return results;
  }

  const sortFunc = (a, b) => a - b;

  nums.sort(sortFunc);
  let left = 0;
  let right = length - 1;

  while (left !== (length - 1) && right !== 0) {
    // nums[left]
    // nums[right]
    const thirdValue = 0 - (nums[left] + nums[right]);
    const thirdIndex = nums.indexOf(thirdValue);
    if (thirdIndex !== left && thirdIndex !== right && thirdIndex !== -1) {
      // 找到了
      const res = [nums[left], nums[right], nums[thirdIndex]].sort(sortFunc);
      const resStr = res.toString();
      if (!resultsStr.includes(resStr)) {
        results.push(res);
        resultsStr.push(resStr);
      }
      right -= 1;
    } else {
      left += 1;
    }
  }
  return results;
};

console.log(threeSum1([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
console.log(threeSum2([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
