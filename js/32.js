// Select the form element with the ID 'form'
const form = document.querySelector('#form');

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get values from the name and password input fields
  const name = document.querySelector('#name').value;
  const password = document.querySelector('#password').value;
  //console.log(name);
  //console.log(password);

  // Remove any existing alert if it is present
  const previousAlert = document.querySelector('.alert');
 

 // if (previousAlert) {
 //   previousAlert.remove();
 // }

 //equal 
 previousAlert?.remove(); // Optional chaining to safely remove if exists

   // Create a new alert div
  const alert = document.createElement('DIV');
  
  //alert.textContent = 'Contenido de Alerta';
  alert.classList.add('alert', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')
  //console.log(alert);
  
// Check if the name or password fields are empty
  if (name === '' || password === '') { 
    // Set alert text and style for a missing field
    alert.textContent = 'Todos los campos son obligatorios';
    //console.log('Todos los campos son obligatorios');
    alert.classList.add('bg-red-500');// Red background for error
    
    
  } else {
    // Set alert text and style for a successful form submission
    // console.log('ok, iniciando sesión');
    alert.textContent = 'ok, iniciando sesión';
    alert.classList.add('bg-green-500');// Green background for success

    
  }
    // Append the alert message to the form
  form.appendChild(alert);
  //console.log(alert);  
  //console.log('enviando formulario');

  // Remove the alert after 1.5 seconds
  setTimeout(() => {
    alert.remove()
  }, 1500);
})