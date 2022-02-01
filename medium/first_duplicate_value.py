# given an array of integers from 1 to n
# where n is the length of the array
# return the value whose duplicate appears first


# Brute force approach
# O(N^2) time O(1) space

# iterate through array, at each index
# look for first duplicate
# check against a stored minIndex
def first_duplicate_value(array):
    min_second_index = len(array)
    for i in range(len(array)):
        value = array[i]
        for j in range(i + 1, len(array)):
            val_compare = array[j]
            if value == val_compare:
                min_second_index = min(min_second_index, j)
    if min_second_index == len(array):
        return -1

    return array[min_second_index]


# Set approach
# O(N) time O(N) space
# create a set for seen values,
# iterate through the array
# add values to the set
# if the value is in the set, return the value
def first_duplicate_value(array):
    seen = set()
    for value in array:
        if value in seen:
            return value
        seen.add(value)
    return -1

# constant space solution
# because values are from 1 to n
# found values can be mapped to idx val - 1
# val @ index can be set negative to indicate it was found
# iterate until a negative number is found
# only works if you can mutate array


def first_duplicate_value(array):
    for val in array:
        abs_value = abs(val)
        if array[abs_value - 1] < 0:
            return abs_value
        array[abs_value - 1] *= -1
    return -1
