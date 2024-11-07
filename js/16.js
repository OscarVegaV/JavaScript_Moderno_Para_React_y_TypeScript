// ** Function Returning Values **

// Function Expression: 'sum' defined as a function that returns the sum of 'num1' and 'num2'
// const sum = function (num1 = 0, num2 = 0) {
//   return num1 + num2;
// };

// Arrow Function: 'sum' defined as an arrow function that returns the sum
const sum = (num1 = 0, num2 = 0) => num1 + num2;

// Function Declaration: Declares 'sum' as a function that returns the sum
// function sum(num1 = 0, num2 = 0) {
//   return num1 + num2;
// };

// Stores the result of calling 'sum' with arguments 10 and 20
const result = sum(10, 20);

console.log(result); // Expected Output: 30
