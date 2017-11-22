/* eslint no-console: off, prefer-destructuring: off */

/**
 * @version 1.0.0
 * @description 25/25
 * @description 79ms 90.03%
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations1 = function letterCombinations(digits) {
  const length = digits.length;
  if (length === 0) {
    return [];
  }

  function crossJoin(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    const newArray = Array(length1 * length2);

    for (let i = 0; i < length1; i += 1) {
      for (let j = 0; j < length2; j += 1) {
        newArray[(i * length2) + j] = arr1[i] + arr2[j];
      }
    }
    return newArray;
  }

  const dict = [
    [], [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']];

  let results = [''];

  for (let i = 0; i < length; i += 1) {
    const subArray = dict[digits[i]];
    results = crossJoin(results, subArray);
  }

  return results;
};

letterCombinations1('23');
