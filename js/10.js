// ** Arrays ** | Manipulating arrays with non-mutating methods 

// Creating an array named 'tech' with a list of programming languages and frameworks
const tech = ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js']

/*
  // Adding a new item to the end of the array with .push()
  // tech.push('Nest.js'); // Adds 'Nest.js' to the end of 'tech' (mutates the array)

  // Creating a new array with 'Nest.js' added to the beginning using the spread operator (non-mutating)
  const newArray = ['Nest.js', ...tech]; // Creates a new array that doesn't modify the original
  console.table(tech);       // Shows original 'tech' array
  console.table(newArray);   // Shows new array with 'Nest.js' at the beginning
*/

/*
  // Removing the first item of the array using .shift()
  // tech.shift(); // Removes the first element of the 'tech' array (mutates the array)
  // console.log(tech);

  // Using .filter() to create a new array without 'HTML'
  const tech2 = tech.filter(function(item) {
    if(item !== 'HTML') {   // Keeps all elements except 'HTML'
      return item;
    }
  });

  console.log(tech2); // Displays the new array with 'HTML' removed
*/

// Using .map() to create a new array, replacing 'Node.js' with 'Nest.js' without mutating the original
const tech3 = tech.map(function(item) {
  if (item === 'Node.js') {
    return 'Nest.js';      // Replaces 'Node.js' with 'Nest.js' in the new array
  } else {
    return item;           // Keeps other elements the same
  }
});

console.log(tech3); // Displays the new array with 'Node.js' replaced by 'Nest.js'




