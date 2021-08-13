def isPalindrome(string):
    if len(string) == 1:
        return True
    reverse = reverse_str(string)
    if reverse == string:
        return True
    return False


def reverse_str(string):
    reverse = ''
    for letter in string:
        reverse = letter + reverse
    return reverse

# function that takes in a non empty string and determines whether the string
# is a palindrome
# function will return a boolean value
# single character strings are palindromes

# one approach would be to create a helper function that reverses the string
# and compares them
# downside is that this approach requires one iteration through the entire
# string to reverse,
# and then when making the equality comparison, both strings will be iterated
# through

# function is_palindrome(string)
#  if len(string) == 1
#  return true
# 	reverse = reverse(string)
# 	if reverse == string
#    	return true
#   return false


# reverse(string)
#  		reverse = ''
# 		for letter in string
# 			string = letter + string
# 		return reverse
