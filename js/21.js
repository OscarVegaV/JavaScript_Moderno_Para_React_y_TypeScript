// Ternary Operator Examples

// Setting initial values for authentication, balance, bill amount, and card availability
const auth = true;
const balance = 1000; 
const bill = 1200;
const card = true;

// Check if the user is authenticated using if-else
if (auth) {
  console.log('Usuario Autenticado');
} else {
  console.log('Usuario No Autenticado');
}

// Equivalent check using the ternary operator
auth ? console.log('Usuario Autenticado') : console.log('Usuario No Autenticado');

// Check if payment can be made using ternary with OR (||) logic:
// Either the balance should be greater than the bill or a card should be available
balance > bill || card ?
  console.log('Si puedes pagar') :    
  console.log('No, no puedes pagar');
