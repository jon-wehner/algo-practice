# Given: non empty string of lowercase letters and a non negative integer
# representing a key
# letters need to "wrap" around the alphabet
# declare a string that is the alphabet
# if the key is greater than 26 need to find the index to the new letter
# char_index + key % 26 = new key
# caesar_char = alphabet[new_key]

# PLAN
def caesarCipherEncryptor(string, key):
    # declare alphabet variable
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
# declare empty string to hold answer
    caesar_string = ''
# iterate through input string
    for char in string:
        # find char idx
        char_idx = alphabet.index(char)
        #  find new key
        caesar_idx = (char_idx + key) % 26
        #  add the new character to the input string
        caesar_string += alphabet[caesar_idx]
    #  return the caesar string
    return caesar_string
