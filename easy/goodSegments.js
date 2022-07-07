/*
 * Complete the 'goodSegment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY badNumbers
 *  2. INTEGER lower
 *  3. INTEGER upper
 */
// sort badNumbers
// iterate through the range given to find the size of the gaps between each badNumber and return the largest one
// alternatively iterate through badNumbers, until the upper bound is exceeded and return the biggest difference
// need to account for cases of first badNumber being smaller than lower and last being larger than upper

/* psuedo code stuff
func goodSegment
longestSegment = 0
sort bad numbers

for badNum in badNumbers
if badNum < lower continue
if badNum > upper currentSegment = upper - lastBadNum, check longest and break

currentSegment = currNum - lastBadNum
if currentSegment > longestSegment, longestSegment = currentSegment

return longestSegment
*/
function goodSegment(badNumbers, lower, upper) {
  badNumbers.sort((a, b) => a - b)
  let longestSegment = 0
  for (let i = 1; i < badNumbers.length; i++) {
    const badNum = badNumbers[i]
    const lastBadNum = badNumbers[i - 1]
    let currentSegment = 0

    if (lastBadNum < lower) {
      currentSegment = badNum - lower
    } else if (badNum > upper) {
      currentSegment = upper - lastBadNum
    } else {
      currentSegment = badNum - lastBadNum - 1
    }
    if (currentSegment > longestSegment) {
      longestSegment = currentSegment
    }
  }
  // check to catch upper being greater than last badNumber
  const tailCheck = upper - badNumbers[badNumbers.length - 1]
  return Math.max(longestSegment, tailCheck)
}
