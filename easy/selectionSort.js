// implement selection sort
// time n^2/ space 1

function selectionSort (array) {
  let currentIdx = 0
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i
      };
    };
    swap(currentIdx, smallestIdx, array)
    currentIdx += 1
  };
  return array
};

function swap (i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
}
