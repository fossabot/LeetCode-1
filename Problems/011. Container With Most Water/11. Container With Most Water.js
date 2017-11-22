/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 48/49, Runtime out at No.49 case.
 * @description 0
 * @param {number[]} height
 * @return {number}
 */
const maxArea1 = function maxArea1(height) {
  const length = height.length;
  let maxContain = 0;
  for (let x = 0; x < length; x += 1) {
    const dy = height[x];
    for (let x2 = x + 1; x2 < length; x2 += 1) {
      const dy2 = height[x2];
      const minDy = Math.min(dy, dy2);
      const dx = x2 - x;
      const contain = dx * minDy;
      if (contain > maxContain) {
        maxContain = contain;
      }
    }
  }
  return maxContain;
};

/**
 * @version 2.0.0
 * @description 49/49
 * @description 90ms 81.62%
 * @description https://yq.aliyun.com/articles/889
 * @param {number[]} height
 * @return {number}
 */
const maxArea2 = function maxArea2(height) {
  let left = 0;
  let right = height.length - 1;
  let maxContain = 0;

  while (left < right) {
    maxContain = Math.max(maxContain, Math.min(height[left], height[right]) * (right - left));
    if (height[left] > height[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return maxContain;
};

console.log(maxArea1([1, 3, 4, 5, 7]));
console.log(maxArea2([1, 3, 4, 5, 7]));
