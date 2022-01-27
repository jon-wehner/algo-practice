def selectionSort(array):
    # declare two variables to keep track of smallest and unsorted idx
    unsorted_idx = 1
    # iterate through the unsorted portion of the array and find the
    # smallest number
    while unsorted_idx <= len(array) - 1:
        smallest_idx = unsorted_idx - 1
        for i in range(unsorted_idx, len(array)):
            if array[i] < array[smallest_idx]:
                smallest_idx = i
        swap(unsorted_idx - 1, smallest_idx, array)
        unsorted_idx += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
