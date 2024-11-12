// functions.js - Module with basic arithmetic functions and syntax variations

// Function to add two numbers
export function sum(numb01, numb02) {
  return numb01 + numb02;
}

// Function to subtract the second number from the first
export function subtract(numb01, numb02) {
  return numb01 - numb02;
}

/* 
Alternative syntaxes for export:

// Same functions without export (local scope only)
function sum(numb01, numb02) {
  return numb01 + numb02;
};

function subtract(numb01, numb02) {
  return numb01 - numb02;
};

// Exporting functions using a different syntax
export {
  sum,
  subtract
};
*/

// Exporting a default function (only one default export allowed per file)
export default function multiply(numb01, numb02) {
  return numb01 * numb02;
}

// Arrow function syntax for basic operations

// Addition using an arrow function
export const sum_with_arrow_func = (numb01, numb02) => numb01 + numb02;

// Subtraction using an arrow function
export const subtract_with_arrow_func = (numb01, numb02) => numb01 - numb02;

// Multiplication using an arrow function (alternative to default export)
export const multiply_with_arrow_func = (numb01, numb02) => numb01 * numb02;

// Division using an arrow function
export const division_with_arrow_func = (numb01, numb02) => numb01 / numb02;
