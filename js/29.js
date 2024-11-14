// Handling elements with JavaScript

// Using document.querySelector() to select DOM elements
// Select the first element with the class 'heading'
const heading = document.querySelector(".heading");

// querySelectorAll selects all matching elements with the specified selector
const links2 = document.querySelectorAll(".navigation a"); // Selects all <a> elements within '.navigation'

// Update the text content of the 'heading' element
heading.textContent = 'Un nuevo heading...';

// Selecting an input field and setting a new value
const inputName = document.querySelector('#name');
inputName.value = 'Un nuevo valor';

// Log the NodeList of links to the console
console.log(links2);

// Update the text content of each link element in 'links2', starting with 'Nuevo enlace 1' up to 'Nuevo enlace 4'
links2.forEach((navigation, i) => navigation.textContent = `Nuevo enlace ${i + 1}`);
