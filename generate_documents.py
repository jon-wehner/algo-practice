def generateDocument(characters, document):
    if document == "":
        return True
    char_counts = {}
    for char in characters:
        if char in char_counts:
            char_counts[char] += 1
        else:
            char_counts[char] = 1
        for char in document:
            if char not in char_counts:
                return False
            elif char_counts[char] == 1:
                del char_counts[char]
            else:
                char_counts[char] -= 1
    return True


# function takes in a string of characters and
# a document that needs to be generated
# function returns true or false, representing whether the document
# can be generated from the characters supplied
# characters in the input string can only be used once in the document string
# ie characters = 'aaa' cannot generate 'aaaa'
# you can always generate an empty string
# document may contain any characters including special characters,
# capital letters, numbers, spaces

# test characters = abcdef
# document = bcdefa

# iterate through characters string and create a dictionary with each
# character present and how many instances
# iterate through the document and subtract from the amount for each character,
#  if any value reaches -1 or
# the key does not exist, return false
# function generate document(chars, doc):
# if doc = "":
# return True
# character_counts = dictionary
# for char in chars:
# 		if char in character_counts
#   dict[char] += 1
# 		else:
#   dict[char] = 1
#  for char in doc:
# 		if char not in character counts:
#   return False
#   elif dict[char] == 1:
#   delete key
#   else:
#   dict[char] -= 1
#   return True
