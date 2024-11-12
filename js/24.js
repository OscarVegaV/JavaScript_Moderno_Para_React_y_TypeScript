// 24.js - Main JavaScript file to perform basic calculations

// Importing functions from the functions.js module with alias for 'sum' function
import { sum as functionSum, subtract } from './functions.js';

// Performing addition using the aliased 'functionSum'
const result = functionSum(20, 10);

// Displaying the result of the addition in the console
console.log(result);
