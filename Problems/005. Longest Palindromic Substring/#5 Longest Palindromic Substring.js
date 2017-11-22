/**
 * @version 0.1
 * @description O(n^3) 2000ms
 * @description Time Limit Exceeded
 * @param {string} s
 * @return {number}
 */
Array.prototype.isEqual = function(b) {
  return (JSON.stringify(this) === JSON.stringify(b));
};

function longestPalindrome(s) {
  let length = s.length;
  let maxSubString = '';
  let subString = '';
  for (let count = 1; count < length + 1; count++) {
    for (let i = 0; i < length - count + 1; i++) {
      subString = s.substr(i, count);
      if (subString[0] === subString[subString.length - 1]) {
        let subArray = subString.split('');
        if (subArray.isEqual([].concat(subArray).reverse())) {
          maxSubString = (subArray.length > maxSubString.length) ? subArray.join('') : maxSubString;
        }
      }
    }
  }
  return (maxSubString);
}

let result = longestPalindrome('abbvba');
console.log(result);