// Defining two variables: a number and a string
const numb1 = 20;
const numb2 = "20";

/*
  == (comparator non-strict): compares values, ignores type
  === (comparator strict): compares both value and type
*/

// Strict comparison (===) will check both value and type
if (numb1 === numb2) {
  console.log('Si son iguales'); // This won't execute because types are different
} else {
  console.log('NO, no son iguales'); // This will execute because types differ (number vs string)
}