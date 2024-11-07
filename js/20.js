// Setting initial balance, bill amount, and card availability
const balance = 1000; 
const bill = 500;
const card = false;

/**
 * Logical OR (||) - True if at least one condition is met
 * Logical AND (&&) - True only if all conditions are met
 */

/*
Using if-else to check payment conditions:
If balance is enough, print "Puedes Pagar."
Else if card is available, print "Puedes Pagar con Tc."
Else print "No, no puedes pagar."
*/

// Example of logical OR (||) check:
if (balance >= bill || card) {  // Checks if there's enough balance OR a card available
  console.log('Puedes Pagar');
} else {
  console.log('No, no puedes pagar');
}
