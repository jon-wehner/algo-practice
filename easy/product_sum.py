# Tip: You can use the type(element) function to check whether an item
# is a list or an integer.
def productSum(array, depth=1):
    # iterate through our array summing the array as we go
    # and multiplying by depth
    # if the element is an array, call productSum on the e
    # lement and add one to depth
    sum = 0
    for el in array:
        if type(el) is list:
            sum += productSum(el, depth + 1)
        else:
            sum += el
    return sum * depth
