def moveElementToEnd(array, toMove):
	# Declare Pointers at each end of the array
    left = 0
	right = len(array) - 1
	# Iterate until the pointers reach each other
	while left < right:
		# If the pointers haven't crossed
		# And right pointer = toMove, decrement right pointer
		while left < right and array[right] == toMove:
			right -= 1
		# If the left pointer needs to move, swap left and right
		if array[left] == toMove:
			array[left], array[right] = array[right], array[left]
		# Increment left
		left += 1
	# Return Array
    return array
