// Fetch API with Promises
// Attempting to retrieve data from a specified URL and handle the response

const url = 'https://jsonplaceholder.typicode.com/comments';

// This is a promise-based fetch request, processing each step with .then()
fetch(url)
  // First then() handles the initial response
  .then( (response) => {
    if (response.ok) {
      // If the response status is 200 OK, parse it as JSON
      return response.json();      
    }
    // If the response is not OK, throw an error to be caught in catch()
    throw new Error("Hubo un error");//if it isn't    
  })

  // Display the retrieved data in the console
  .then( data =>{
    console.log(data); // display the data
  })
  // Handle any network issues or errors from above
  .catch(error => {
    console.error(error);    
  });