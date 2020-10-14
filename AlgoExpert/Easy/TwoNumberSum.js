/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a 
target sum. If any two numbers in the array sum up to the target sum, the function should return them in
an array, in any order. If no two numbers sum up to the target sum, the function should return an empty 
array

Note that the target sum has to be obtaied by summing two different integers in the array; you can't add
a single integer to itself in order to obtain the target sum

You can assume that there will be at most one pair of numbers summing up to the target sum.comment

Sample output
array = [3,5,-4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output 
[-1, 11] // the numbers could be in reverse order

*/

// This is the naive solution using two for loops
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  // iterate over over the array
	for (let i = 0; i < array.length; i++) {
		// create a variable for i index
		let x = array[i]
		// create a second iteration
		for (let j = i + 1; j < array.length; j++) {
			// create a variable for j index
			let y = array[j]
			// if arr[i] plus arr[j] equals the target sum
			if (x + y === targetSum) {
				return [x, y]
			}
		}
	}
		return []
}

// Using a hash
// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  // create an object/hash to store the numbers
	const nums = {};
	// iterate over the array with a for of loop
	for (const num of array) {
		// a potentialMatch variable for easier reading
		const potentialMatch = targetSum - num;
		// if the potentialMatch is in the nums object/hash
		if (potentialMatch in nums) {
			// return an array of the potentialMatch and num
			return [potentialMatch, num]
		} else {
			// else store the num in the nums object and mark as true
			nums[num] = true
		}
	}
	// return an empty array
	return []
}

// O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
  // Sort the array
	array.sort((a, b) => a -b);
	// create a left pointer
	let left = 0;
	// create a right pointer
	let right = array.length - 1;
	// create a while loop, while left is less than right
	while(left < right) {
		// create a currentSum variable that adds i plus 1
		const currentSum = array[left] + array[right];
		// if currenSum strictly equals the targetSum
		if (currentSum === targetSum) {
			// return the left and right pointer
			return [array[left], array[right]];
			// else if currentSum is less than targetSum
		} else if (currentSum < targetSum) {
			// increment left pointer
			left++
			// else if currentSum is greater than targetSum
		} else if (currentSum > targetSum) {
			// decrement right pointer
			right--
		}
	}
	return [];
}