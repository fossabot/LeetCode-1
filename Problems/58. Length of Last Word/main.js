/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 这里采用了预处理办法, 但也可以尝试考虑统一处理: 例如忽略 ` ` 空格.
 * @description 79ms 78.45%
 * @param {string} str
 * @return {number}
 */
const lengthOfLastWord1 = function lengthOfLastWord(s) {
  const str = s.trim();
  if (str.length === 0) {
    return 0;
  }

  const array = str.split(' ');
  const length = array.length;
  return array[length - 1].length;
};

console.log(lengthOfLastWord1('   a    '));
