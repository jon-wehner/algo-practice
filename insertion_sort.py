def insertionSort(array):
    for i in range(1, len(array)):
        j = i
        while j > 0 and array[j] < array[j - 1]:
            swap(j, array)
            j -= 1
        return array


def swap(i, array):
    array[i], array[i - 1] = array[i - 1], array[i]
