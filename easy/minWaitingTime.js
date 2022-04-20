function minWaitingTime (array) {
  array.sort()
  let currWaitTime = 0
  let totalWaitTime = 0
  for (const time of array) {
    totalWaitTime += currWaitTime
    currWaitTime += time
  };
  return totalWaitTime
};
