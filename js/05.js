// ** Objects ** | Manipulation | Changing properties, adding, and deleting

// Creating an object named 'product' with three properties
const product = {
  productName : 'Tablet', // Property 'productName' with the value 'Tablet'
  price : 300,            // Property 'price' with the value 300
  available : false       // Property 'available' with the value false
};

// ** Prevent modifications to the object: Object.freeze()**
// ** With Object.freeze, properties cannot be modified, added, or deleted. **
//Object.freeze(product);

// ** Allow modifications but prevent adding or deleting properties: Object.seal() **
// ** With Object.seal, properties can be modified but not added or removed. **
// Object.seal(product);


// Rewrite a value (this is allowed if Object.freeze is not applied)
product.available = true;

// Add a new property if it does not exist
product.image = 'image.jpg';// Adding a new property 'image' with the value 'image.jpg'

// Delete an existing property
delete product.price;

// Display the final product object in the console
console.log(product);