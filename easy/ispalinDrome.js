// time n^2 space n
// when strings are immutable, the string has to be recreated at every iteration to add the new letter
function isPalindrome1(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >=0; i --) {
    reversedString += string[i];
  }
  return string === reversedString;
};
// time n, space n
// putting the characters into the array is a constant time operation, joining them into a string is one linear operation after the loop
function isPalindrome2(string) {
  const reversedChars = [];
  for (let i = string.length -1; i >= 0; i --) {
    reversedChars.push(string[i]);
  };
  return string === reversedChars.join('');
};

// recursive strat, honestly slighty confusing and why even bother?
// time n, space n

function isPalindrome3(string, i = 0) {
  const j = string.length - 1 - i; 
  return i >= j ? true : string[i] === string[j] && isPalindrome3(string, i + 1);
}

// iterate with markers on both side check for equality of each character

function isPalindrome(string) {
  let left = 0
    let right = string.length - 1
    while (left <= right) {
        if (string[left] !== string[right]) {
            return false
        }
        left += 1
        right -= 1
    }
    return true
}