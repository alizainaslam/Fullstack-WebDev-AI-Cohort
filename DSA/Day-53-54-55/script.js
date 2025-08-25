// Q 64. Check if the pangram or not
const sentence = "thequickbrownfoxjumpsoverthelazydog";
function checkIfPangram(sentence) {
  let isPangram = true;
  const uniqueSentence = new Set(sentence);
  if (uniqueSentence.size < 26) {
    isPangram = false;
    return isPangram;
  }
  return isPangram;
}
// console.log(checkIfPangram(sentence));

// Q 65. Write an algorithm to determine if a number n is happy.
const number = 19;
function isHappy(number) {
  let num = number;
  let sum = 0;
  let isHappy = true;
  let seen = new Set();
  while (true) {
    while (num > 0) {
      let digit = Math.floor(num % 10);
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    if (sum === 1) {
      return isHappy;
    }
    if (seen.has(sum)) {
      isHappy = false;
      break;
    }
    seen.add(sum);
    num = sum;
    sum = 0;
  }
  return isHappy;
}
// console.log(isHappy(number));

// Q 66. Find the frequency of each element => Map
const freqInput = "aaababbcbcbc";
function findFrequency(input) {
  let map = new Map();
  let index = 0;
  while (index < input.length) {
    let freq = 0;
    if (map.has(input[index])) {
      freq = map.get(input[index]);
    }
    freq++;
    map.set(input[index], freq);

    index++;
  }
  return map;
}
// console.log(findFrequency(freqInput));

//Q 67. Two Sum : Find the two indices in the array such that their sum equals the target.

const arr = [2, 7, 11, 15];
const target = 26;
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
// console.log(twoSum(arr, target));

//Q 68. First Letter to Appear Twice
const Letters = "abccbaacz";
function firstLetterAppearTwice(string) {
  let i = 0;
  while (i < string.length) {
    if (string[i] == string[i + 1]) {
      return string[i];
    }
    i++;
  }
}
// console.log(firstLetterAppearTwice(Letters));

// Q 69. Sort the people

const names = ["Mary", "John", "Emma"];
const heights = [190, 165, 180];

function sortPeople(names, heights) {
  let mapForPeople = new Map();
  let newArr = [];
  for (let i = 0; i < heights.length; i++) {
    mapForPeople.set(heights[i], names[i]);
  }
  const sortHeights = heights.slice().sort((a, b) => b - a);

  for (let i = 0; i < sortHeights.length; i++) {
    newArr.push(mapForPeople.get(sortHeights[i]));
  }
  return newArr;
}
// console.log(sortPeople(names, heights));
