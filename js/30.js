// DOM Events - Clicks

// Select the 'heading' element
const heading = document.querySelector('.heading');

// Select all the links within the 'navigation' class
const links = document.querySelectorAll('.navigation a');

/*
heading.addEventListener('mouseenter', () => {
  heading.textContent = 'Nuevo heading al pasar el mouse...'
})
heading.addEventListener('mouseleave', () => {
  heading.textContent = 'Saliendo...'
})
*/

// Event listeners for links to capture click events
links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Prevent the default behavior of the link (i.e., it won't navigate)
    e.preventDefault();
    
    // Update the text content of the clicked link to indicate that it was clicked
    e.target.textContent = 'Diste click..';
  });
});