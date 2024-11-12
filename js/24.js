// 24.js - Main JavaScript file to perform basic calculations

// Importing functions from the functions.js module:
// - 'multiply' is the default export and is imported as-is
// - 'sum' is imported with an alias 'functionSum'
// - 'subtract', 'multiply_with_arrow_func', and 'division_with_arrow_func' are imported by their original names
import multiply, { sum as functionSum, subtract, multiply_with_arrow_func, division_with_arrow_func  } from './functions.js';

// Performing addition using the aliased 'functionSum'
const result01 = functionSum(20, 10); // Result of sum (20 + 10)
const result02 = multiply(20, 10); // Result of multiplication (20 * 10)
const result03 = subtract(20, 10); // Result of subtraction (20 - 10)
const result04 = multiply_with_arrow_func(20, 10); // Result of multiplication using arrow function
const result05 = division_with_arrow_func(20, 10); // Result of division (20 / 10)

// Displaying the result of the operations in the console
console.log(result01); // Log result of addition
console.log(result02); // Log result of multiplication
console.log(result03); // Log result of subtraction
console.log(result04); // Log result of multiplication (arrow function)
console.log(result05); // Log result of division
