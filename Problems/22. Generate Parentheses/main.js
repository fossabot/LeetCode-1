/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 直接枚举, 很暴力
 * @description 89ms 87.11%
 * @param {number} n
 * @return {string[]}
 */
// 因为 1.0.0 版本很无趣, 所以就不写出来了. 如果写出来也是浪费存储资源.

/**
 * @version 2.0.0
 * @description 递归，不是很喜欢，但好像已经是还不错的解决办法
 * @description 92ms 79.83%
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis2 = function generateParenthesis(n) {
  let result = [];
  const addBracket = function addBracket(array, str, left, right) {
    if (left === 0 && right === 0) {
      array.push(str);
      return;
    }
    if (left > 0) { addBracket(array, `${str}(`, left - 1, right + 1); }
    if (right > 0) { addBracket(array, `${str})`, left, right - 1); }
  };

  switch (n) {
    case 0: break;
    case 1: result = ['()']; break;
    case 2: result = ['()()', '(())']; break;
    default: addBracket(result, '', n, 0); break;
  }
  return result;
};

/**
 * @version 2.0.1
 * @description 相比 2.0.0, 该版本将缓存计入数组
 * @description 78ms 98.97%
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis201 = function generateParenthesis(n) {
  const addBracket = function addBracket(array, str, left, right) {
    if (left === 0 && right === 0) {
      array.push(str);
      return;
    }
    if (left > 0) { addBracket(array, `${str}(`, left - 1, right + 1); }
    if (right > 0) { addBracket(array, `${str})`, left, right - 1); }
  };

  let result = [];
  const cache = [[], ['()'], ['()()', '(())']];
  if (cache[n]) {
    result = cache[n];
  } else {
    addBracket(result, '', n, 0);
  }

  return result;
};

console.log(generateParenthesis2(3));
console.log(generateParenthesis201(3));
