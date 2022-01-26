# determine max/min speed of pairings of riders from two lists
# each list has the same amount of riders
# speed of the bicycle is determined by max speed of both riders
# given 2 lists of riders, and a boolean value fastest

# ex redShirtSpeeds=[5,5,3,9,2], blueShirtSpeeds=[3,6,7,2,1],fastest = true


# time n, space 1
def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()

    if not fastest:
        reverseArrayInPlace(redShirtSpeeds)

    totalSpeed = 0
    for idx in range(len(redShirtSpeeds)):
        rider1 = redShirtSpeeds[idx]
        rider2 = blueShirtSpeeds[len(blueShirtSpeeds) - idx - 1]

        totalSpeed += max(rider1, rider2)
    return totalSpeed


def reverseArrayInPlace(array):
    start = 0
    end = len(array) - 1
    while start < end:
        array[start], array[end] = array[end], array[start]
        start += 1
        end -= 1
