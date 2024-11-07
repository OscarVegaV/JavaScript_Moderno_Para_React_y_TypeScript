// Loop examples

// Creating an array named 'technologies' with a list of programming languages and frameworks
const technologies = ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js', 'Nest.js', 'TypeScript'];

// 'for' loop | Loops through each item in the array using an index
for (let i = 0; i < technologies.length; i++) {
  
  console.log(`loop foor: ${technologies[i]}`);
  
};


// 'forEach' | Executes a provided function once for each array element
technologies.forEach(function (tech) {
  console.log(`loop .forEach: ${tech}`);
});


// 'map' | Similar to forEach, but returns a new array with the results
technologies.map(function (tech) {
  console.log(`loop .map: ${tech}`);
})

const arrayMap = technologies.map(function (tech) {
  return tech;
});

console.log(arrayMap);// Displays the new array created by map


// 'for...of' | Loops directly over the array values
for (let tech of technologies ) {
  console.log(`loop foor ... of: ${tech}`);
  
}