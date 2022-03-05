class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # Binary search works by finding the middle of the array, and determining if the the target is to the left or right, then repeating the process
        # Declare vars for middle(floor(len/2)), left pointer(0), right pointer(len - 1)
        midIdx = floor(len(nums)/2)
        leftIdx = 0
        rightIdx = len(nums) - 1
        while leftIdx <= rightIdx:
            if nums[midIdx] == target:
                return midIdx
            elif nums[midIdx] > target:
                rightIdx = midIdx - 1
            else:
                leftIdx = midIdx + 1
            midIdx = floor((rightIdx + leftIdx)/2)

        return leftIdx
        # if iteration runs until left >= right, number is not found
        # return midIdx - 1 or + 1 depending on if midIdx is < or > target
