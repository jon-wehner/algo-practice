Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array. 

In other works, the value at output[i] is equal to the product of every number in the input array other than input[i] 

Sample input: array = [5, 1, 4, 2]
Sample output: [8, 40, 10, 20] 
8 is equal to 1 x 4 x 2
40 is equal to 5 x 4 x 2
10 is equal to 5 x 1 x 2
20 is equal to 5 x 1 x 4



One potential solution:
Loop through the input array
Loop through it again, and multiply the numbers in the input array but skip the number at current index
Push the final product to an output array
Return the output array

Big O: n ^2

Pseudocode:
func arrayOfProducts(array)
    output = []
    for i in array
        product = 1
        for j in array            
            if i !=j
              product *= array[j]
        output.push(product)
    return output









function arrayOfProducts(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if( i !== j) {
                product *= array[j];
            }
}
output.push(product);
}
return output;    
};






Write a function that takes in a string of lowercase letters and returns the index of the string's first non-repeating character. If the input string does not have any non-repeating characters, return -1.

The first non-repeating character is the first character in a string that occurs only once. 

Sample input: string = ‘abcdcaf’
Sample output: 1
The first non-repeating character is ‘b’ and is found at index 1
















valid parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. 
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false
Example 4:
Input: s = "([)]"
Output: false
Example 5:
Input: s = "{[]}"
Output: true 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.








S = “)}]”
[({[]

Turn string into array
Let compare = []
For let i = 0 i < array.length i++
    If array[i+1] === key[array[i]]
    If (key[array[i]]) {

}

Key = {
(: ),
{: },
[: ]
}

