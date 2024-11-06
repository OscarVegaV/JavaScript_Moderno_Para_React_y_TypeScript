// ** Template Strings & Concatenation **

const product = "Tablet de 12 Pulgadas"; // Declaring a variable 'product' with the value 'Tablet de 12 Pulgadas'
const price = 400;                       // Declaring a variable 'price' with the value 400
const brand = "Orange";                  // Declaring a variable 'brand' with the value 'Orange'

// Old version of string concatenation using the + operator
console.log('El Producto es: ' + product); // Output: El Producto es: Tablet de 12 Pulgadas

// Template string (modern approach)
console.log(`El Producto es: ${product}`); // Output: El Producto es: Tablet de 12 Pulgadas

// Old version of string concatenation combining multiple variables
console.log(product + " $" + price + " Dolares, marca: " + brand); // Output: Tablet de 12 Pulgadas $400 Dolares, marca: Orange

// Template string (modern approach) with embedded variables
console.log(`${product} $${price} Dolares, marca: ${brand}`); // Output: Tablet de 12 Pulgadas $400 Dolares, marca: Orange
