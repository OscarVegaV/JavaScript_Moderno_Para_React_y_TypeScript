// ** Objects ** | A collection of properties | properties (key : value pairs)

// Creating an object named 'product' with three properties
const product = {
  productName : 'Tablet', // Property 'productName' with the value 'Tablet'
  price : 300,            // Property 'price' with the value 300
  available : false       // Property 'available' with the value false
};

/*
// Display the entire product object in the console
console.log(product);

// Display the product object in a table format for clearer readability
console.table(product);

// Access and display the value of the 'productName' property from the product object
console.log(product.productName); // Output: 'Tablet'
*/


//  ** Destructuring ** - extracting values from the object properties

/*
const { productName, price, available } = product;
console.log(productName); // Output: 'Tablet'
console.log(price);       // Output: 300
console.log(available);   // Output: false
*/

/*
// Equivalent to:
const productName = product.productName;
const price = product.price;
const available = product.available;
console.log(productName);
console.log(price);
console.log(available);
*/

// ** Object Literal Enhancement ** - shorthand for creating objects with existing variable names

// Defining variables
const authenticated = true;
const user = "Oscar";

// Creating an object using existing variables as properties
const newObject = {
  authenticated, // Property name 'authenticated' is automatically set to variable 'authenticated'
  user           // Property name 'user' is automatically set to variable 'user'
}
// Alternatively, if you wanted different names, you could write: user: user2

console.log(newObject);// Output: { authenticated: true, user: "Oscar" }
