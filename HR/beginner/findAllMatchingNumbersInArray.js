/*
Basic Set 2.2: Finding all matching numbers in an array
  Given an array of numbers, return all even numbers from the array.
  DO NOT use .filter() in your solution.
  DO use a for loop.
  TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
  Examples
    Input	
      numbers:[ 10, 20, 25, 30 ]
    Output
      [ 10, 20, 30 ]
*/

function findEven(numbers) {
  // create result variable
  let result = [];

  // iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2 % 0) {
      result.push(numbers[i]);
    }
  }
  // return result
  return result;
}

// Using Recursion
