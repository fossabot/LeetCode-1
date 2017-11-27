

/**
 * [getIntRandom description]
 * @param  {[type]} max [description]
 * @param  {[type]} min [description]
 * @return {[type]}     [description]
 */
function getIntRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * [generateNums description]
 * @param  {[type]} length [description]
 * @param  {[type]} max    [description]
 * @param  {[type]} min    [description]
 * @return {[type]}        [description]
 */
function generateNums(length, max, min) {
  const nums = [];
  for (let i = 0; i < length; i++) {
    nums.push(getIntRandom(max, min));
  }
  return nums;
}

const nums = generateNums(100000, 0, 10000000000);
// console.log(nums);

Array.prototype.swap = function (i, j) {
  [this[j], this[i]] = [this[i], this[j]];
};

/**
 * Quick Sort
 * @param {number[]} nums ??
 * @return {number[]} result
 */
function quickSort(nums) {
  const partition = function (left, right) {
    const pivotValue = nums[right];
    let store = left;
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivotValue) {
        nums.swap(store, i);
        store++;
      }
    }
    nums.swap(right, store);
    // console.log(nums);
    return store;
  };

  const sort = function (left, right) {
    if (left < right) {
      const newPivot = partition(left, right);
      sort(left, newPivot - 1);
      sort(newPivot + 1, right);
    }
  };

  sort(0, nums.length - 1);
  return nums;
}

console.time('quick sort time');
quickSort(nums);
console.timeEnd('quick sort time');
// console.log(nums);

/**
 * Check Sort
 * @param  {number[]} nums ??
 * @console {boolean} result
 * @return {null} Empty
 */
function checkSort(nums) {
  console.time('abc');
  let result = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (!result) {
      console.log(i, nums[i]);
      console.log(i + 1, nums[i + 1]);
      break;
    }
    result = result && (nums[i] < nums[i + 1]);
  }
  // console.log(result);
}

// const nums = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
// console.time('Check Sort Time');
// checkSort(nums);
// console.timeEnd('Check Sort Time');
