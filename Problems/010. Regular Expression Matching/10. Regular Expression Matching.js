/**
 * @version 0.1
 * @description
 * @description 59.74%
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let str = '#' + s;
  let exp = new RegExp('#' + p, 'i');
  let result = str.replace(exp, '');
  return (result === '');
};

console.log(isMatch("", "a"));
