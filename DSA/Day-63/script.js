// 88. Merge Sorted Array ! Do not return anything, modify nums1 in-place instead.
const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];
let m = 3,
  n = 3;

function merge(nums1, nums2, m, n) {
  let i = m - 1,
    j = n - 1,
    k = nums1.length - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
const res = merge(nums1, nums2, m, n);
// console.log(nums1);

// 89. Remove Duplicates from Sorted Array
let arr = [0, 0, 1, 1, 2, 3, 4, 5, 5];
function removeDuplicates(nums) {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
}

// 90. Duplicate Zeros
let inputArr = [1, 0, 2, 3, 0, 4, 5, 0];
function duplicateZero(inputArr) {
  let zeroes = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 0) zeroes++;
  }
  let i = inputArr.length - 1;
  let j = inputArr.length - 1 + zeroes;
  while (i != j) {
    if (j < inputArr.length) {
      inputArr[j] = inputArr[i];
    }
    j--;
    if (inputArr[i] === 0) {
      if (j < inputArr.length) {
        inputArr[j] = inputArr[i];
      }
      j--;
    }
    i--;
  }
}
duplicateZero(inputArr);
console.log(inputArr);
