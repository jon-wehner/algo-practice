// Implement Bubble Sort


// Time: O(n^2) Space: O(1)
function bubbleSort(array) {
  let isSorted = flase;
  while (!isSorted) {
    isSorted = true;
    for (let i=0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      };
    };
  };
  return array
};

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
};