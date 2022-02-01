# take a non empty array of ints and return an array of same length
#  where each el is the output of every other number in the input array

# Brute Force Approach
# ON^2) time O(N) space
def array_of_products(array):
    products = [1 for _ in range(len(array))]

    for i in range(len(array)):
        running_product = 1
        for j in range(len(array)):
            if i != j:
                running_product *= array[j]
        products[i] = running_product
    return products

# right and left product arrays
# O(N) time and space
# the key idea is that the product of the rest of the indexes
# is simply the product of every number to the left and to the right of an idx
# which can be iterated separately instead of with nested iteration


def array_of_products(array):
    products = [1 for _ in range(len(array))]
    left_products = [1 for _ in range(len(array))]
    right_products = [1 for _ in range(len(array))]

    left_running_product = 1
    for i in range(len(array)):
        left_products[i] = left_running_product
        left_running_product *= array[i]

    right_running_product = 1
    for i in range(len(array)):
        right_products[i] = right_running_product
        right_running_product *= array[i]

    for i in range(len(array)):
        products[i] = left_products[i] * right_products[i]

    return products

# more optimized version of above solution, same complexity


def array_of_products(array):
    products = [1 for _ in range(len(array))]

    left_running_product = 1
    for i in range(len(array)):
        products[i] = left_running_product
        left_running_product *= array[i]

    right_running_product = 1
    for i in range(len(array)):
        products[i] *= right_running_product
        right_running_product *= array[i]

    return products
