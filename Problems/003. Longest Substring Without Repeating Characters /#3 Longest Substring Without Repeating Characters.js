/**
 * @version 0.1
 * @description ERROR Case: s = ""
 * @description
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let subArray = [];
  let counts = [];
  let length = s.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (subArray.indexOf(s[i]) === -1) {
      if (counts[j] === undefined) {
        counts[j] = 1;
      } else {
        counts[j]++;
      }
    } else {
      subArray = [];
      j++;
      counts[j] = 1;
    }
    subArray.push(s[i]);
  }
  return (Math.max(...counts));
}

/**
 * @version 0.2
 * @description ERROR Case s = 'dvdf'
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let length = s.length;
  if (length === 0) {
    return 0;
  }
  let subArray = [];
  let counts = [];

  let j = 0;
  for (let i = 0; i < length; i++) {
    if (subArray.indexOf(s[i]) === -1) {
      if (counts[j] === undefined) {
        counts[j] = 1;
      } else {
        counts[j]++;
      }
    } else {
      subArray = [];
      j++;
      counts[j] = 1;
    }
    subArray.push(s[i]);
  }
  return (Math.max(...counts));
}

/**
 * @version 0.3
 * @description 148ms 97.14% 2017/01/22
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let length = s.length;
  let subArray = [];
  let max = 0;
  for (let i = 0; i < length; i++) {
    let index = subArray.indexOf(s[i]);
    // Find char at subArray[index]
    if (index >= 0) {
      // Cut old sub string
      subArray.splice(0, index + 1);
    }
    subArray.push(s[i]);
    max = subArray.length >= max ? subArray.length : max;
  }
  return max;
}

// return (Math.max(...counts));
lengthOfLongestSubstring('dvdf');
console.log();

let arr = [0, 1, 2, 3, 4, 5];
arr.splice(0, 3);
// console.log(arr);
