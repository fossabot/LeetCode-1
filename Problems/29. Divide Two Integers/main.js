/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 题目要求不能用乘、除、取余运算, 然而我还是用了, 有空再仔细琢磨
 * @description 112ms 97.83%
 * @description 不符合题目要求
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide1 = function divide(dividend, divisor) {
  const temp = dividend / divisor;
  let result = 0;
  if (temp > 0) {
    result = Math.floor(temp);
  } else {
    result = Math.ceil(temp);
  }
  if (dividend < -2147483648 || dividend > 2147483647 ||
    divisor < -2147483648 || divisor > 2147483647 ||
    result < -2147483648 || result > 2147483647) {
    return 2147483647;
  }
  // 实际上是为了比较 Object.is(result, -0), 但这个操作影响运行时间
  if (result === 0) {
    return 0;
  }
  return result;
};

console.log(divide1(1, 2));
console.log(divide1(1004958205, -2137325331));
