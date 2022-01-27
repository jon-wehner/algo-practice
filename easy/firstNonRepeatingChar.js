// return the first non repeating character

// brute force method time: n^2 space: 1

function firstNonRepeatingCharacterBrute(string) {
  for(let i = 0; i < string.length; i++) {
    let foundDuplicate = false;
    for( let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) {
        foundDuplicate = true;
      };
    };
    if (!foundDuplicate) {
      return i;
    };
  };
  return -1;
}


// iterate and store characters in a hash table, n time, n space

function firstNonRepeatingCharacter(string) {
  const counts = {}
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1
    }
  };
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (counts[char] === 1) return i;
  }
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
