def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    idx_one = 0
    idx_two = 0
    current_diff = float("inf")
    smallest_diff = float("inf")
    smallest_pair = []
    while idx_one < len(arrayOne) and idx_two < len(arrayTwo):
        num_one = arrayOne[idx_one]
        num_two = arrayTwo[idx_two]
        if num_one < num_two:
            current_diff = num_two - num_one
            idx_one += 1
        elif num_two < num_one:
            current_diff = num_one - num_two
            idx_two += 1
        else:
            return [num_one, num_two]
        if current_diff < smallest_diff:
            smallest_diff = current_diff
            smallest_pair = [num_one, num_two]
    return smallest_pair


# [-1, 3, 5, 10, 20, 28]
# [15, 17, 26, 134, 135]

# sort the input arrays
# declare variables idx1, idx2
# declare a smallest_diff, current_diff, smallest_pair
# while idx1, idx2, < len(array1, array2)
#  if num_one < num_two
#    idx1 += 1
#  elif num 2 < num 1
# 	 idx2 += 1
#  else
#   return [num1, num2]
#  check the diff
#  if current_diff < smallest_diff
#  		smallest_diff = current_diff
#       smallest_pair = [num1, num2]
