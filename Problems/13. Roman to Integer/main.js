/* eslint-disable no-console */

/**
 * @description [description]
 * @param {string} s
 * @return {number}
 */
const romanToInt = function romanToInt(s) {
  let result = 0;
  let str = s;

  if (str.match(/CM/g) !== null) {
    str = str.replace(/CM/g, '');
    result += 900;
  }

  if (str.match(/CD/g) !== null) {
    str = str.replace(/CD/g, '');
    result += 400;
  }

  if (str.match(/XC/g) !== null) {
    str = str.replace(/XC/g, '');
    result += 90;
  }

  if (str.match(/XL/g) !== null) {
    str = str.replace(/XL/g, '');
    result += 40;
  }

  if (str.match(/IX/g) !== null) {
    str = str.replace(/IX/g, '');
    result += 9;
  }

  if (str.match(/IV/g) !== null) {
    str = str.replace(/IV/g, '');
    result += 4;
  }

  if (str.match(/M/g) !== null) {
    result += str.match(/M/g).length * 1000;
    str = str.replace(/M/g, '');
  }

  if (str.match(/D/g) !== null) {
    result += str.match(/D/g).length * 500;
    str = str.replace(/D/g, '');
  }

  if (str.match(/C/g) !== null) {
    result += str.match(/C/g).length * 100;
    str = str.replace(/C/g, '');
  }

  if (str.match(/L/g) !== null) {
    result += str.match(/L/g).length * 50;
    str = str.replace(/L/g, '');
  }

  if (str.match(/X/g) !== null) {
    result += str.match(/X/g).length * 10;
    str = str.replace(/X/g, '');
  }

  if (str.match(/V/g) !== null) {
    result += str.match(/V/g).length * 5;
    str = str.replace(/V/g, '');
  }

  if (str.match(/I/g) !== null) {
    result += str.match(/I/g).length * 1;
    str = str.replace(/I/g, '');
  }
  return result;
};

console.log(romanToInt('VI'));
