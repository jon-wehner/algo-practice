function validateSubsequenceWhile (array, sequence) {
  let arrIdx = 0
  let seqIdx = 0
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx += 1
    };
    arrIdx += 1
  };
  return seqIdx === sequence.length
};

function validateSubsequenceFor (array, sequence) {
  let seqIdx = 0
  for (let i = 0; i < array.length; i++) {
    if (seqIdx === sequence.length) {
      break
    };
    if (sequence[seqIdx] === array[i]) {
      seqIdx += 1
    };
  };
  return seqIdx === sequence.length
}
