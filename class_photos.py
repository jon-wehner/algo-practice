def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)
    tallest = redShirtHeights
    shortest = blueShirtHeights
    if blueShirtHeights[0] > redShirtHeights[0]:
        tallest = blueShirtHeights
        shortest = redShirtHeights
        i = 0
    while i < len(tallest):
        if shortest[i] >= tallest[i]:
            return False
            i += 1
    return True

# given two arrays of student heights separated by red/blue shirt wearers
# each student in the back row must be taller than their
# partner in the front row
# each student wearing the same color shirt must be in the same row
# find which array has the highest value, that's the back row
# sort the arrays?
# iterate through back row
# check to see if the back row is taller
# return false if any student in the front row is shorter than student
# at same index in front row
# return true if you get through the entire iteration
