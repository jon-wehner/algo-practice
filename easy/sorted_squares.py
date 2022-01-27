def sortedSquaredArray(array):
    answers = [0 for _ in array]
    smallest_idx = 0
    largest_idx = len(array) - 1
    for idx in reversed(range(len(array))):
        smallest = array[smallest_idx]
        largest = array[largest_idx]
        if abs(smallest) > abs(largest):
            answers[idx] = smallest * smallest
            smallest_idx += 1
        else:
            answers[idx] = largest * largest
            largest_idx -= 1
    return answers


# Given a sorted array, return an array of the squares of those numbers
# also sorted.
# The big catch is when negative are part of the array.
# There is an easy solution of iterating through the array
# and sorting the answer array
# Another solution is to create an empty answer array,
# then iterate through the length of the array backwards
# check the number at the end of the array and at the beginning
# and make sure the one at the beginning is not larger
# if it, put that one at the end, otherwise just do the larger value

# PLAN:
# declare a smallest idx, start at 0
# declare a largest idx, start at len(array) - 1
# declare an answers array which is [0 for _ in array]
# iterate through the reversed range of the length of the array
# check if abs(smallest) > abs(largest)
#  answers[idx] = smallest * smallest
# else
# answers[idx] = largest * largest
# return answers
