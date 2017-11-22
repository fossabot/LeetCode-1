/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 117/117
 * @description 82ms 99.01%
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function longestCommonPrefix(strs) {
  /**
   * @description 取得两个字符串的公共前缀
   * @param {string, string} str1, str2
   @ @return {string}
   */
  const getCommonPrefix = function getCommonPrefix(str1, str2) {
    if (str1 === str2) {
      return str1;
    }
    for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
        return str1.substr(0, i);
      }
    }
    return '';
  };

  const length = strs.length;
  let result = length > 0 ? strs[0] : '';
  for (let i = 0; i < length; i += 1) {
    if (result.length > strs[i].length) {
      result = strs[i];
    }
  }

  for (let i = 0; i < length; i += 1) {
    result = getCommonPrefix(strs[i], result);
  }
  return result;
};

console.log(longestCommonPrefix(['']));
