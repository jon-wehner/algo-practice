function generateDocument (characters, document) {
  const charCounts = {}

  for (const character of characters) {
    if (!(character in charCounts)) charCounts[character] = 0

    charCounts[character]++
  }

  for (const character of document) {
    if (!(character in charCounts) || charCounts[character] === 0) return false

    charCounts[character]--
  }
  return true
}
