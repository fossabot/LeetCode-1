const nums1 = [20];
const nums2 = [0];

function concatSortedArray(nums1, nums2) {
  const array = [];
  let index1 = 0;
  let index2 = 0;
  const sum = nums1.length + nums2.length;

  if (nums1.length === sum || nums2.length === sum) {
    return nums1.length > nums2.length ? nums1 : nums2;
  }

  for (let i = 0; i < sum; i++) {
    if (nums1[index1] <= nums2[index2] || nums2[index2] === undefined) {
      array[i] = nums1[index1];
      index1++;
    } else {
      array[i] = nums2[index2];
      index2++;
    }
  }
  return array;
}

const findMedianSortedArrays = function (nums1, nums2) {
  const newNums = concatSortedArray(nums1, nums2);

  if (newNums.length % 2 !== 0) {
    const index = Math.floor(newNums.length / 2);
    return newNums[index];
  }
  const indexR = newNums.length / 2;
  const indexL = indexR - 1;
  return (newNums[indexL] + newNums[indexR]) / 2;
};

console.log(findMedianSortedArrays(nums1, nums2));
