// ** Conditionals and Comparison Operators ** 

// Defining variables 'available' as the current balance and 'withdraw' as the withdrawal amount
const available = 4000;
const withdraw = 200;

// Defining a variable 'auth' to represent authentication status
const auth = true;

// ** Checking authentication status ** 
if (auth) {
  // Condition fulfilled: user is authenticated
  console.log('Acceso al sistema ...');
} else {
  // Condition not fulfilled: user is not authenticated
  console.log('NO tienes permiso, Inicia Sesión!');
}

// ** Checking if balance is sufficient for withdrawal ** 
if (available >= withdraw) {
  console.log('Retiro correcto'); // Balance is sufficient for withdrawal
} else {
  console.log('Montos insuficientes'); // Balance is insufficient for withdrawal
}

/*
** JavaScript Operators Reference **

Arithmetic Operators
+   Addition
-   Subtraction
*   Multiplication
**  Exponentiation (ES2016)
/   Division
%   Modulus (Division Remainder)
++  Increment
--  Decrement
*******************************

Comparison Operators
==  Equal to (abstract equality, type conversion allowed)
=== Strict equal (equal value and type)
!=  Not equal
!== Strict not equal (different value or type)
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
?   Ternary operator (shortened if/else)
*********************************

Logical Operators
&&  Logical AND (true if both conditions are true)
||  Logical OR (true if at least one condition is true)
!   Logical NOT (inverts true to false, or vice versa)

*/
