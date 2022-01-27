def isValidSubsequence(array, sequence):
    arr_idx = 0
    seq_idx = 0
# iterate through the array looking for the first number in our sequence
# when we find it, we want to increment the sequence index
# if we find all numbers in the sequence, return true
# if seqIdx = len(sequence)
# if we make it through the array without finding all of the numbers
#   return false
# if arrIdx = len(array) and seqIdx < len(sequence)
    while arr_idx < len(array) and seq_idx < len(sequence):
        if sequence[seq_idx] == array[arr_idx]:
            seq_idx += 1
        arr_idx += 1
    if seq_idx == len(sequence):
        return True
    return False
