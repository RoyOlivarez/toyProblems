/*
  Basic Set 2.1: Finding all matching strings in an array
    Given a length (number) and an array of strings, return all strings that are greater than or equal to the given length.
    DO NOT use .filter() in your solution.
    DO use a for loop.
    TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
    Examples
    
      Input
        length:3
        array: [ "a", "ab", "abc", "abcd" ]	
      Output: [ "abc", "abcd" ]
    
      Input
        length:2
        array:[ "x", "hello", "z" ]
      Output: ["hello"]
*/

function greatThan(length, array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= length) {
      result.push(array[i]);
    }
  }
  return result;
}

let array = ['a', 'ab', 'abc', 'abcd'];

console.log(greatThan(3, array));
