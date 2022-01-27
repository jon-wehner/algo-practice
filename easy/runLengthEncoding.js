// Run Length Encoding
// Runs are stored as data value and length of run
// AAAA = 4A
// max run is 9
// lossless means we can get back to original input with output and vice versa
// O(N) time O(N) space



function runLengthEncoding(string) {
  const chars = [];
  let currentRunLength = 1;
  for (let i = 1; i < string.length; i ++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      chars.push(currentRunLength.toString(), previousCharacter)
      currentRunLength = 0;
    }
    currentRunLength += 1;
  }
  chars.push(currentRunLength.toString(), string[string.length - 1])
  return chars.join('');
};