/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description Too easy for js
 * @description 85ms 78.31%
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr1 = function strStr(haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr1('Hello', 'llo'));
