// DOM Events - Inputs

// Select the input element with the ID 'name'
const inputName = document.querySelector('#name');

// Add an event listener to track input in the 'name' field
inputName.addEventListener('input', (e) => {
  // Log the current value of the input field whenever the user types
  console.log(e.target.value);
});

// Select the input element with the ID 'password'
const inputPassword = document.querySelector('#password');

// Add an event listener for the password field to toggle visibility
inputPassword.addEventListener('input', functionPassword);

// Function to temporarily reveal the password text
function functionPassword() {
  // Change the input type to text, making the password visible
  inputPassword.type = "text";

  // After 300ms, change the input type back to password
  setTimeout(() => {
    inputPassword.type = 'password';
  }, 300);
}
