/* given non empty array of intervals
merge overlapping intervals and return the new intervals
an interval is an array of 2 ints, first num is the start, 2nd is the end
back to back intervals are not overlapping */

// sort the intervals by their start times
// if the end of an interval is greater than the start of the next interval, they overlap
// push first interval to output array
// iterate thru the array starting at idx 1, check prev interval in output array for overlap
// change interval in output array if necessary
// this method makes it a lot easier to merge multiple consec intervals
// NB: when sorting by start val, an interval could completely encompass one to its right


// time: O(N) space: O(N)
function mergeOverlappingIntervals(intervals) {
  const sortedIntervals= intervals.sort((a, b) => a[0] - b[0]);
	
  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval
      mergedIntervals.push(currentInterval)
    }
  };
  return mergedIntervals
};