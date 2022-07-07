/*
 * Complete the 'countSignals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY frequencies
 *  2. 2D_INTEGER_ARRAY filterRanges
 */

/* find the frequency range that will pass through then count the number of signals that will pass through
iterate through filter ranges and restrict the min and max frequency as the sub arrays are checked
sort frequences, count the good ones
*/

function countSignals(frequencies, filterRanges) {
  const passThroughRange = [filterRanges[0][0], filterRanges[0][1]]
  let count = 0
  for (let i = 1; i < filterRanges.length; i++) {
    const lower = filterRanges[i][0]
    const upper = filterRanges[i][1]

    passThroughRange[0] =
      lower > passThroughRange[0] ? lower : passThroughRange[0]
    passThroughRange[1] =
      upper < passThroughRange[1] ? upper : passThroughRange[1]
  }

  frequencies.sort((a, b) => a - b)
  for (const frequency of frequencies) {
    if (frequency >= passThroughRange[0] && frequency <= passThroughRange[1]) {
      count += 1
    }
  }
  return count
}
