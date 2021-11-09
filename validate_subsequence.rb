def isValidSubsequence(array, sequence)
  arrIdx = 0
  seqIdx = 0
  while arrIdx < array.length and seqIdx < sequence.length
    if sequence[seqIdx] == array[arrIdx]
      seqIdx += 1
    end
    arrIdx += 1
  end
  if seqIdx == sequence.length
    return true
  end
  false
end

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

print isValidSubsequence(array, sequence)