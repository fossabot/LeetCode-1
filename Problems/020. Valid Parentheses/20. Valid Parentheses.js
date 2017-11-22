/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description
 * @description 116ms 30.21%
 * @param {string} str
 * @return {boolean}
 */
const isValid1 = function isValid(str) {
  const array = Array.from(str);
  const length = array.length;
  if (length === 0) {
    return true;
  }

  if (length % 2 !== 0) {
    return false;
  }

  function isMatch(char1, char2) {
    return '()[]{}'.includes(char1 + char2);
  }

  const testArray = [];

  for (let i = 0; i < length; i += 1) {
    if (testArray.length === 0) {
      testArray.push(array[i]);
    } else if (isMatch(testArray[testArray.length - 1], array[i])) {
      testArray.pop();
    } else {
      testArray.push(array[i]);
    }
  }

  return testArray.length === 0;
};

/**
 * @version 1.0.0
 * @description
 * @description 79ms 96.21%
 * @param {string} str
 * @return {boolean}
 */
const isValid2 = function isValid(str) {
  const length = str.length;
  if (length === 0) {
    return true;
  }

  if (length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < length; i += 1) {
    if (str[i] === '(') {
      stack.push(')');
    } else if (str[i] === '{') {
      stack.push('}');
    } else if (str[i] === '[') {
      stack.push(']');
    } else if (stack.length === 0 || stack.pop() !== str[i]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid1('{}'));
console.log(isValid2('{}'));
