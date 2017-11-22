/* eslint-disable no-console */

/**
 * @version 0.1
 * @description 1047/1047
 * @description 122ms 97.40%
 * @param {string} str
 * @return {number}
 */
const myAtoi = function myAtoi(str) {
  let result = Number.parseInt(str, 10);
  if (Number.isNaN(result)) {
    result = 0;
  }
  if (result > 2147483647) {
    result = 2147483647;
  }
  if (result < -2147483648) {
    result = -2147483648;
  }
  return result;
};

console.log(myAtoi(''));
