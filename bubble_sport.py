def bubbleSort(array):
    # iterate through the array
    # if next < curr, we want to switch their positions
    # if we made a swap, then we want to iterate again
    # could use a boolean flag to keep track of if the array is sorted,
    # and then return when it's true
    sorted = False
    while not sorted:
        swapped = False
        for idx, num in enumerate(array):
            if idx < len(array) - 1 and num > array[idx + 1]:
                array[idx] = array[idx+1]
                array[idx + 1] = num
                swapped = True
        if swapped is False:
            sorted = True
    return array
