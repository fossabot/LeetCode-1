/**
 * @version 0.1
 * @description
 * @description
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  'use strict';
  if (x <= -2147483648 || x >= 2147483647) {
    return 0;
  }
  var arr = x.toString().split('');
  var resultStr = arr.reverse().join('');
  var result = Number.parseInt(resultStr, 10);
  if (x < 0) {
    result = 0 - result;
  }
  if (result <= -2147483648 || result >= 2147483647) {
    return 0;
  }
  return result;
};

console.log(reverse(1463847412));
