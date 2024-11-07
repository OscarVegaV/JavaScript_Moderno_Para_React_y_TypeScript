// ** Array Methods Examples **

// Creating an array named 'technologies' with a list of programming languages and frameworks
const technologies = ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js']
const numbers = [10, 20, 30];

// ** filter ** - Creates a new array with elements that pass the specified test (elements not equal to 'HTML')
const exampleFilter = technologies.filter((tech) => tech !== 'HTML');
console.log(exampleFilter); // Output: ['CSS', 'JavaScript', 'React.JS', 'Node.js']

// ** filter with numbers ** - Creates a new array with elements that are greater than 15
const result = numbers.filter(number => number > 15 )
console.log(result); // Output: [20, 30]


// ** includes ** - Checks if 'CSS' exists in the 'technologies' array, returns true if found, false if not
const exampleInclude = technologies.includes('CSS');
console.log(exampleInclude); // Output: true

// ** some ** - Checks if at least one element in 'numbers' is greater than 15, returns true or false
const exampleSome = numbers.some( number => number > 15);
console.log(exampleSome);// Output: true


// ** find ** - Finds and returns the first element in 'numbers' that is greater than 15
const exampleFind = numbers.find( number => number > 15 )
console.log(exampleFind); // Output: 20




// ** every ** - Checks if all elements in 'numbers' are greater than 5, returns true if all meet the condition, otherwise false
const exampleEvery = numbers.every(number => number > 5);
console.log(exampleEvery); // Output: true

// ** reduce ** - Calculates a single accumulated value by summing up all elements in 'numbers'
const ExampleReduce = numbers.reduce((total, number) => total + number, 0);
console.log(ExampleReduce);// Output: 60