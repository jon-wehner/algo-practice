/* given an array and an integer, move all instances of the integer to the end
the order of the other integers does not matter 
steps:
put pointers at each end of the array
iterate through the array while the pointers have not met
decrement right pointer until it is not num
if right pointer is not num and left pointer is num, swap
incremenet left pointer
return array
*/



// time O(n), space O(1)
function moveElementToEnd(array, num) {
  let i = 0;
  let j = array.length - 1; 

  while (i < j) {
    // add constraint of i < j otherwise on last iteration of while loop line 13 will cause 
    // i and j to cross but the while loop on line 10 will not break
    while (array[j] === num && i < j) {
      j -= 1;
    };
    if (array[i] === num) swap(i, j, array);
    i += 1;    
  };
  return array;
};



function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
};

