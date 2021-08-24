function firstNonRepeatingCharacter(string) {
  const counts = {}
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in counts) {
      counts[char]
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
