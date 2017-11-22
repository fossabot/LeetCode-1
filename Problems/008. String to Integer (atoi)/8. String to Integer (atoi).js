/**
 * @version 0.1
 * @description
 * @description
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let result = Number.parseInt(str, 10);
  if (isNaN(result)) {
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
