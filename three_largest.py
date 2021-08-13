def findThreeLargestNumbers(array):
    answers = []
    largest = None
    second_largest = None
    third_largest = None
    for num in array:
        if largest is None or num >= largest:
            third_largest = second_largest
            second_largest = largest
            largest = num
            continue
        elif second_largest is None or num >= second_largest:
            third_largest = second_largest
            second_largest = num
            continue
        elif third_largest is None or num >= third_largest:
            third_largest = num
    return [third_largest, second_largest, largest]
