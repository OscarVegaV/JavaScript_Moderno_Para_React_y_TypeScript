// ** Objects ** | Destroctoring two o more objects| 

// Creating an object named 'product' with three properties
const product = {
  name : 'Tablet', // Property 'productName' with the value 'Tablet'
  price : 300,            // Property 'price' with the value 300
  available : false       // Property 'available' with the value false
};

// Creating another object named 'customer' with nested properties
const customer = {
  name: "Oscar",         // Property 'name' with the value 'Oscar'
  premium: true,         // Property 'premium' with the value true
  direction: {           // Nested 'direction' property with an inner property
    street: "Segundo Bloque" // Inner property 'street' with the value 'Segundo Bloque'
  }
};

// ** Destructuring objects **

// Extracting the 'name' property from 'product'
const {name } = product;

// Extracting and renaming the 'name' property from 'customer' to 'nameCustomer'.
// Also accessing the nested 'street' property within 'direction' using destructuring {}.
const { name: nameCustomer, direction: {street} } = customer; 

console.log(name);// Output: 'Tablet'
console.log(nameCustomer, street); // Output: 'Oscar', 'Segundo Bloque'