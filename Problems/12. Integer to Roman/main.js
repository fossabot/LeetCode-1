/**
 * @version 0.1
 * @description 74.29%
 * @param {number} num
 * @return {string}
 */

// the range from 1 to 3999.

let intToRoman = function(num) {
  'use strict';
  let result = '';
  let roman = function(n) {
    if (n === 0) {
      return;
    } else if (n >= 1000) {
      result += 'M';
      n -= 1000;
    } else if (n >= 900) {
      result += 'CM';
      n -= 900;
    } else if (n >= 500) {
      result += 'D';
      n -= 500;
    } else if (n >= 400) {
      result += 'CD';
      n -= 400;
    } else if (n >= 100) {
      result += 'C';
      n -= 100;
    } else if (n >= 90) {
      result += 'XC';
      n -= 90;
    } else if (n >= 50) {
      result += 'L';
      n -= 50;
    } else if (n >= 40) {
      result += 'XL';
      n -= 40;
    } else if (n >= 10) {
      result += 'X';
      n -= 10;
    } else if (n >= 9) {
      result += 'IX';
      n -= 9;
    } else if (n >= 5) {
      result += 'V';
      n -= 5;
    } else if (n >= 4) {
      result += 'IV';
      n -= 4;
    } else if (n >= 1) {
      result += 'I';
      n -= 1;
    }
    roman(n);
  };
  roman(num);
  return result;
};

intToRoman('12');
