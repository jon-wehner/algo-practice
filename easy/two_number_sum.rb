def twoNumberSum(array, targetSum)
  complements = {}
  array.each do |num|
      complements[num] = num
  end
  array.each do |num|
    complement = targetSum - num
    if complements.has_key?(complement) && complement != num
      return [num, complement]
    end
  end
  return []
end


array = [4, 6]
targetSum = 10

print twoNumberSum(array, targetSum)