def threeNumberSum(array, targetSum):
    triplets = []
    array.sort()
    for i in range(len(array) - 2):
        left = i + 1
        right = len(array) - 1
        while left < right:
            current_sum = array[i] + array[left] + array[right]
            if current_sum == targetSum:
                triplets.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif current_sum < targetSum:
                left += 1
            elif current_sum > targetSum:
                right -= 1
    return triplets

# Taking a non-empty array of DISTINCT integers and a target sum. 
# Return all triplets that add up to the sum
# Sort the array in place
# Iterate through the array
# Declare a left and a right variable on each end of the array
# while left is < right
# the sum is curr num + array[left] + array[right]
# if it's equal to the sum append the numbers
# increment both pointers to the center
# if curr sum too small increment left
# if curr sum too large decrement right
