// Selectors 

// Using document.querySelector() to select DOM elements
// Select the first element with the class 'heading'
const heading = document.querySelector(".heading");

// Log information about the selected heading element
console.log(heading);                // Logs the whole element
console.log(heading.tagName);        // Logs the tag name of the element, e.g., 'H1'
console.log(heading.textContent);    // Logs the text content inside the element
console.log(heading.classList);      // Logs the list of classes applied to the element

// Differences between querySelector() and querySelectorAll()

// querySelector selects the first matching element with the specified selector (e.g., an <a> inside a '.navegation' element)
const links = document.querySelector(".navegation a"); // Displays only the first matching element

// querySelectorAll selects all matching elements with the specified selector
const links2 = document.querySelectorAll(".navegation a"); // Displays all matching elements

// Log the results of querySelectorAll, which returns a NodeList of all <a> elements within '.navegation'
console.log(links2);
