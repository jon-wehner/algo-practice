/**
 * @param {string} s
 * @return {number}
 */
// LeetCode #13
 var romanToInt = function(s) {
  const romans = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let value = 0;
  for (let i = 0; i < s.length - 1; i ++) {
      const currentValue = romans[s[i]];
      const nextValue = romans[s[i + 1]];
      if (currentValue < nextValue) {
          value -= currentValue;
      } else {
          value += currentValue
      }
  }
  const lastValue = romans[s[s.length - 1]]
  return value + lastValue
};

// Convert string in roman numerals to integer
// Declare variables to represent to represent number values
// iterate through the input string
// nextChar = str[i + 1]
// currValue = 0
// currChar = str[i]
// if I and Next = v or x value = next - I.. i +=2
// similar logic for X and C 
// convert value to int and add to value
// PLAN:
// construct an object with the key:values pairs of letter: value
// iterate through the string until the 2nd to last character
// if the curr character is less than the next character, subtract it from the value
// otherwise add it to the value
// add the last character to the value
// return value
// PSEUDOCODE
// func romanToInt(s)
// obj {I: 1, V:5....}
// val = 0
// for i from (0, len - 1)
// if curr < next
//  val -= curr
// else
//  val += curr
// val += str[str.len - 1]
// return val