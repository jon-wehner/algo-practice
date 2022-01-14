// write a function that takes in a special array returns the product sum
// a special array contains integers or other special arrays
// the product sum of a special array is the sum of its elements where special arrays inside it are summed themselves and 
// multiplied by depth level
// ex [x, y] == x + y
// [x,[y,z]] == x + 2(y + z)

// starting from left iterate through every element in the array and sum them up
// if the element is an array, add to the sum add the product sum on that array
// will need to declare a variable for the sum, and add a depth parameter for recursive calls


// O(N) time, O(D) space

function productSum(array, depth = 1) {
  let sum = 0;
  for (const element in array) {
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1)
    } else {
      sum += element
    } 
  }
  return sum * depth;
};


