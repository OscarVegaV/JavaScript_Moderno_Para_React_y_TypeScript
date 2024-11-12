// ** Short-Circuit Evaluation using Logical AND '&&' **

// Setting a boolean variable 'auth' to represent user authentication status
const auth = true;

// Using short-circuit evaluation to conditionally execute code
// If 'auth' is true, the message 'Usuario Autenticado' will be logged to the console
// If 'auth' is false, the console.log statement will be skipped
auth && console.log('Usuario Autenticado');  // Outputs 'Usuario Autenticado' if 'auth' is true
