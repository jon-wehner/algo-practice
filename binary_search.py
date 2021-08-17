import math


def binarySearch(array, target):
    left = 0
    right = len(array) - 1

    while left <= right:
        middle = (left + right) // 2
        match = array[middle]
        if match == target:
            return middle
        elif match > target:
            right = middle - 1
        else:
            left = middle + 1
    return -1


# Implement Binary Search
# Initialize left pointer at idx zero
# Initialize right pointer at idx len(array) - 1
# Initialize middle (left, right)/2 rounded down
# while left < right
# If middle == target, return middle
# IF middle > target, right = middle - 1
# If middle < target left = middle + 1
# return - 1
