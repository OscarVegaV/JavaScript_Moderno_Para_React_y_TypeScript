// functions.js - Module with basic arithmetic functions

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
