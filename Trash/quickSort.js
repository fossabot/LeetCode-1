

function quickSort(array) {
  const swap = function (array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
  };

  const partition = function (array, left, right) {
    // 基准元素移至末尾（选取最后一个元素为基准）
    const pivot = array[right];
    // 定义起始交换位置
    let storeIndex = left;
    // 遍历数组
    for (let i = left; i <= right; i += 1) {
      if (array[i] <= pivot) {
        swap(array, i, storeIndex);
        storeIndex += 1;
      }
    }
    return storeIndex - 1;
  };

  const sort = function (array, left, right) {
    if (left > right) {
      return;
    }
    const storeIndex = partition(array, left, right);
    sort(array, left, storeIndex - 1);
    sort(array, storeIndex + 1, right);
  };

  sort(array, 0, array.length - 1);
  return array;
}

let nums = [3, 7, 8, 2, 5, 1, 9, 5, 4];
nums = quickSort(nums);
console.log(nums);
