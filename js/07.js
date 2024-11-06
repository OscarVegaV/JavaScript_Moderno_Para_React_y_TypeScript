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
  
};

/*
// Adding a property to a new object and merging properties from 'product'
// Using the spread operator to copy all properties from 'product'
const cartShipping = {
  amount: 1,             // New property 'amount' with the value 1
  ...product             // Spread operator to add all properties from 'product'
};

console.log(cartShipping); // Display the cartShipping object in the console
*/


// Merging two objects into a new object using the spread operator
const newObject = {
  ...product,            // Spread operator to add all properties from 'product'
  ...customer            // Spread operator to add all properties from 'customer'
};
console.log(newObject);    // Display the merged newObject in the console

// Equivalent to using ...product and ...customer (another way to merge objects)
// Object.assign merges the properties of 'product' and 'customer' into a new object
const newObject2 = Object.assign({}, product, customer); 
console.log(newObject2);   // Display the merged newObject2 in the console