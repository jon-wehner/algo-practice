// given an array find the three largest numbers
// return 3nums as a sorted array

// keep track of the 3 largest numbers while iterating through array

// O(N) time/ O(1) space
function findThreeLargestNums (array) {
  const threeLargest = [null, null, null]
  for (const num of array) {
    updateLargest(threeLargest, num)
  };
  return threeLargest
};

function updateLargest (threeLargest, num) {
  if (threeLargest[2] == null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2)
  } else if (threeLargest[1] == null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1)
  } else if (threeLargest[0] == null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0)
  }
}

function shiftAndUpdate (array, num, idx) {
  for (let i = 0; i > idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}
