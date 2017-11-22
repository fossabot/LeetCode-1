/* eslint-disable no-console */
/**
 * @version 0.1
 * @description
 * @description 59.74%
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function isMatch(s, p) {
  const str = `#${s}`;
  const exp = new RegExp(`#${p}`, 'i');
  const result = str.replace(exp, '');
  return (result === '');
};

console.log(isMatch('', 'a'));
