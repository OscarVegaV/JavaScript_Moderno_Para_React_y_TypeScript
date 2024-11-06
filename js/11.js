// Creating an array named 'tech' with a list of programming languages and frameworks
const tech = ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js'];

// Accessing the fourth item in the 'tech' array and assigning it to 'reac'
const reac = tech[3];

// ** Array Destructuring ** - Extracting the fourth element ('React.JS') from the 'tech' array
const [, , , reacjs] = tech;

// Display the value of 'reacjs' (which will be 'React.JS')
console.log(reacjs);
