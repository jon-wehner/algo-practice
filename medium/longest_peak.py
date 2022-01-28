# write a function that takes in an array of ints and returns the longest peak
# a peak is adjacent integers that are strictly increasing
# and then are strictly decreasing
# find the tips of the peaks by checking if each number is greater
# than it's adjacent ints
# check to the left and right of each peak to find out how long the
# ints are decreasing
# return the longest peak

# time O(N) space O(1)
def longest_peak(array):
    longest_peak = 0
    i = 1
    while i < len(array) - 1:
        is_peak = array[i] > array[i - 1] and array[i] > array[i + 1]
        if not is_peak:
            i += 1
            continue

        left_idx = i - 2
        while left_idx >= 0 and array[left_idx] < array[left_idx + 1]:
            left_idx -= 1
        right_idx = i + 2
        while right_idx < len(array) and array[right_idx] < array[right_idx-1]:
            right_idx += 1

        current_peak = right_idx - left_idx - 1
        longest_peak = max(current_peak, longest_peak)
        i = right_idx
    return longest_peak
