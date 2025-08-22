// Q 55. Accept a string from user and print its each character on a new line
const inputString = "JavaScript";
let index = 0,
  lastIndex = inputString.length - 1;

/* Uncomment it before excute Q.55th
while (index <= lastIndex) {
  process.stdout.write(`${inputString[index]}`);
  console.log();
  index++;
}
  */

// Q 56. Accept a string and print it in reverse order
let revStr = "";
while (lastIndex >= index) {
  revStr += inputString[lastIndex];
  lastIndex--;
}
// console.log(revStr);

//  Q 57. Pallindromic String  using Two pointer algorithm (hint: Array reverse algo)
const input = "Racecar";

function pallindromeChecker(input) {
  let splitInput = input.split("");
  let joinInput;
  let isPallindrome = true;

  let left = 0,
    right = splitInput.length - 1;

  while (left < right) {
    let temp = splitInput[left];
    splitInput[left] = splitInput[right];
    splitInput[right] = temp;

    left++;
    right--;
  }
  joinInput = splitInput.join("").toLowerCase();

  if (input.toLowerCase() == joinInput) {
    isPallindrome;
  } else {
    isPallindrome = false;
  }
  return isPallindrome;
}

// console.log(pallindromeChecker(input));

//  Q 58. Toggle each alphabet of String In - AcgDfD Output - aCGdFd
const alphabet = "AcgDfD";
let toggledAlphabet = "";

for (let i = 0; i < alphabet.length; i++) {
  if (alphabet[i] == alphabet[i].toLowerCase()) {
    toggledAlphabet += alphabet[i].toUpperCase();
  } else if (alphabet[i] == alphabet[i].toUpperCase()) {
    toggledAlphabet += alphabet[i].toLowerCase();
  }
}
// console.log(toggledAlphabet);

// Q 59. Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
const arrayOfInput = ["pay", "attention", "practice", "attend"];
const prefix = "at";
let number = 0;

for (let i = 0; i < arrayOfInput.length; i++) {
  if (arrayOfInput[i].slice(0, 2) == prefix) number++;
}
// console.log(number);

// Q 60. Capitalize first & last character of each word in the sentence and print the new sentence Ex - Hello bhai Kaise ho a HellO BhaI KaisE HO A
const sentence = "Hello bhai Kaise ho a";
const splitSentence = sentence.split(" ");
let tempArray = [];

for (let i = 0; i < splitSentence.length; i++) {
  let index = splitSentence[i];
  if (index.length < 2) tempArray.push(index.toUpperCase());
  if (index.length >= 2) {
    let firstIndex = index[0].toUpperCase(),
      lastIndex = index[index.length - 1].toUpperCase();
    let newWord = firstIndex + index.slice(1, -1) + lastIndex;
    tempArray.push(newWord);
  }
}
// console.log(tempArray.join(" "));

// 61.- Accept a string and print the frequency of each character present in the string
const charFreqInput = "kabhi khushi kabhi ghum".toLowerCase();

function characterFrequency(str) {
  let tempArray = new Array(123).fill(0);
  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt();
    if (ascii !== 32) {
      tempArray[ascii] = tempArray[ascii] + 1;
    }
  }
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] > 0) {
      console.log(String.fromCharCode(i) + ": " + tempArray[i]);
    }
  }
}
// characterFrequency(charFreqInput);

// Q 62. Check Two Strings are Anagram or Not Anagrams words have the same word length & same character count Examples of anagram words are arc and car, state and taste, night and thing etc.
let s1 = "thing",
  s2 = "night";

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return "Strings are not anagrams";
  } else {
    let isAnagram = true;
    let frequencyArr = new Array(123).fill(0);

    for (let i = 0; i < s1.length; i++) {
      let ascii = s1[i].charCodeAt();
      frequencyArr[ascii]++;
      frequencyArr[ascii]--;
    }

    for (let i = 0; i < frequencyArr.length; i++) {
      if (frequencyArr[i] > 0) {
        isAnagram = false;
        return isAnagram;
      }
    }
    if (isAnagram) return isAnagram;
  }
}
// console.log(isAnagram(s1, s2));

// Jewels and Stones

let jewels = "z",
  stones = "ZZ";
function numJewelsInStones(jewels, stones) {
  if (1 < jewels.length || stones.length > 50) return "Input length!";
  let uniqueJewels = new Set(jewels);
  let index = 0;
  for (let i = 0; i < stones.length; i++) {
    for (const char of uniqueJewels) {
      if (stones[i] == char) {
        index++;
      }
    }
  }
  return index;
}
// console.log(numJewelsInStones(jewels, stones));

