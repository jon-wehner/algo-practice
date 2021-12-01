// O(nlong) time | O(n) space
// function sortedSquaredArray(array) {
//   const sortedSquares = new Array(array.length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     value = array[i];
//     sortedSquares[i] = valye * value;
//   }
//   sortedSquares.sort();
//   return sortedSquares;
// }

function sortedSquaredArray (array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx += 1;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx -= 1;
    };
  };
  return sortedSquares;
};