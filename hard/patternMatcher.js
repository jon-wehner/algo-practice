/* given 2 strings, first string is a pattern of xs and ys
second string is the "main string"

figure out if the main string matches the pattern, and what is the value of x and y

steps:
  split the pattern
  get counts of x and ys and first y pos
  is there a y?
  start with length of x = 1
  can calculate the length of y
  yidx = first y pos x len of x
  get substrings and use the pattern to see if they equal the main string
*/

function patternMatcher (pattern, string) {
  if (pattern.length > string.length) {
    return []
  }
  const newPattern = getNewPattern(pattern)
  const didSwitch = newPattern[0] !== pattern[0]
  const counts = { x: 0, y: 0 }
  const firstYPos = getCountsandFirstYPos(newPattern, counts)

  if (counts.y !== 0) {
    for (let lenOfX = 1; lenOfX < string.length; lenOfX++) {
      const lenOfY = (string.length - lenOfX * counts.x) / counts.y
      if (lenOfY <= 0 || lenOfY % 1 !== 0) continue
      const yIdx = firstYPos * lenOfX

      const x = string.slice(0, lenOfX)
      const y = string.slice(yIdx, yIdx + lenOfY)
      const potentialMatch = newPattern.map(char => char === 'x' ? x : y).join('')

      if (string === potentialMatch) {
        return !didSwitch ? [x, y] : [y, x]
      }
    }
  } else {
    const lenOfX = string.length / counts.x
    if (lenOfX % 1 === 0) {
      const x = string.slice(0, lenOfX)
      const potentialMatch = newPattern.map(char => char === 'x' ? x : '').join('')
      if (string === potentialMatch) {
        return !didSwitch ? [x, ''] : ['', x]
      }
    }
  }
  return []
}

function getNewPattern (pattern) {
  const patternLetters = pattern.split('')
  if (pattern[0] === 'x') {
    return patternLetters
  }
  return patternLetters.map((char) => char === 'y' ? 'x' : 'y')
}

function getCountsandFirstYPos (pattern, counts) {
  let firstYPos = null
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    counts[char] += 1
    if (char === 'y' && firstYPos == null) {
      firstYPos = i
    }
  }
  return firstYPos
}
