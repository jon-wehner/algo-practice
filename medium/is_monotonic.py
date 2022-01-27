def isMonotonic(array):
    if len(array) <= 2:
        return True
    nonIncreasing = None
    for i in range(1, len(array)):
        curr = array[i]
        prev = array[i - 1]
        if nonIncreasing is None and curr < prev:
            nonIncreasing = True
        if nonIncreasing is None and curr > prev:
            nonIncreasing = False
        if nonIncreasing:
            if curr > prev:
                return False
            else:
                pass
        if not nonIncreasing:
            if curr < prev:
                return False
            else:
                pass
    return True


def isMonotonicConcise(array):
    isNonIncreasing = True
    isNonDecreasing = True
    for i in range(1, len(array)):
        if array[i] < array[i - 1]:
            isNonDecreasing = False
        if array[i] > array[i - 1]:
            isNonIncreasing = False
    return isNonDecreasing or isNonIncreasing


def isMonotonicDirection(array):
    if len(array) <= 2:
        return True

    direction = array[1] - array[0]
    for i in range(2, len(array)):
        if direction == 0:
            direction = array[i] - array[i - 1]
            continue
        if breaksDirection(direction, array[i - 1], array[i]):
            return False
    return True


def breaksDirection(direction, previousInt, currentInt):
    difference = currentInt - previousInt
    if direction > 0:
        return difference < 0
    return difference > 0
