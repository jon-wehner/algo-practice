def firstNonRepeatingCharacter(string):
    counts = {}
    for char in string:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
        for i in range(len(string)):
            char = string[i]
            if counts[char] == 1:
                return i
    return -1


# initialize an empty hash table
# iterate through the string and count all of the characters
# iterate through the string again and return the idx of the first char with
# only one count
# return -1
