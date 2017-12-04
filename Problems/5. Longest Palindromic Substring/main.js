/* eslint-disable no-console,prefer-destructuring */
/**
 * @version 1.0.0
 * @description O(n^3) 2000ms
 * @description Time Limit Exceeded
 * @param {string} s
 * @return {string}
 */
// eslint-disable-next-line no-extend-native
Array.prototype.isEqual = function isEqual(b) {
  return (JSON.stringify(this) === JSON.stringify(b));
};

const longestPalindrome1 = function longestPalindrome(s) {
  // eslint-disable-next-line prefer-destructuring
  const length = s.length;
  let maxSubString = '';
  let subString = '';
  for (let count = 1; count < length + 1; count += 1) {
    for (let i = 0; i < (length - count) + 1; i += 1) {
      subString = s.substr(i, count);
      if (subString[0] === subString[subString.length - 1]) {
        const subArray = subString.split('');
        if (subArray.isEqual([].concat(subArray).reverse())) {
          maxSubString = (subArray.length > maxSubString.length) ? subArray.join('') : maxSubString;
        }
      }
    }
  }
  return maxSubString;
};

/**
 * @version 2.0.0
 * @description O(n) 109ms 95.52%
 * @description 恐怖的算法... Manacher 算法
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = function longestPalindrome(s) {
  let length = s.length;
  if (length < 2) {
    return length;
  }

  let newStr = '$#';
  for (let i = 0; i < length; i += 1) {
    newStr += s[i];
    newStr += '#';
  }
  length = newStr.length;
  const p = Array(length);
  for (let i = 0; i < length; i += 1) {
    p[i] = 0;
  }
  let id = 0;
  let mx = 0;
  let resId = 0;
  let resMx = 0;
  for (let i = 1; i < length; i += 1) {
    if (mx > i) {
      p[i] = Math.min(p[(2 * id) - i], mx - i);
    } else {
      p[i] = 1;
    }
    while (newStr[i + p[i]] === newStr[i - p[i]]) {
      p[i] += 1;
    }
    if (mx < i + p[i]) {
      mx = i + p[i];
      id = i;
    }
    if (resMx < p[i]) {
      resMx = p[i];
      resId = i;
    }
  }
  return s.substr((resId - resMx) / 2, resMx - 1);
};

const testString = `civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagrea
tbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthattha
tnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecanno
thallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworld
adswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedh
eretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafsk
remainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotio
nthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgov
ernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth`;

console.time('result1Time');
const result1 = longestPalindrome1(testString);
console.timeEnd('result1Time');
// resultTime: 1135.494873046875ms

console.time('result2Time');
const result2 = longestPalindrome2(testString);
console.timeEnd('result2Time');
// result2Time: 0.572021484375ms
console.log(result1 === result2, result1);
