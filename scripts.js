// 1) Sum of an array
// Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 
// Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results.

let sum = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    console.log(`The total is ${total}`);
    return total;
}
// Examples:
sum([3, 4, 5]); // returns 12
sum([10, 5, 9]); // returns 24



// 2) Average of an array
// Write code that takes an array of numbers as a parameter and returns the average of those numbers.
// Hint: calculating the average requires only one more step after finding the sum.

let average = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    let average = total / array.length;
    console.log(`The average is ${average}`);
    return average;
}
// Examples:
average([3, 4, 5]); // returns 4
average([10, 5, 9]); // returns 8



// Bonus 1: Refactor your code to re-use a function
// Now, rewrite your average function so it calls your sum function  to add the numbers up. This is an example of using a function to reuse code.

let average2 = (array) => {
    let total2 = sum(array);
    let average2 = total2 / array.length;
    console.log(`The average is ${average2}`);
    return average2;
}
// Examples:
average2([3, 4, 5]); // returns 4
average2([10, 5, 9]); // returns 8



// Bonus 2:
// Write a function that takes an array of numbers and returns the largest number.

let max = (array) => {
    let largest = Math.max(...array);
    console.log(`The largest value is ${largest}`);
    return largest;
}
// Examples:
max([7,10, 30, 1]); // returns 30

 

// Bonus 3:
// Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.

let largestSum = (array1, array2) => {
    let largest1 = Math.max(...array1);
    let largest2 = Math.max(...array2);
    console.log(largest1 + largest2);
    return largest1 + largest2;
}
// Example:
largestSum([3, 2, 8], [4, 9, 1]); // returns 17
