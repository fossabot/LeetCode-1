/**
 * @version 0.1
 * @description
 * @description 81.48%
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString(10);
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 - i) {
      break;
    }
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(23244232));
