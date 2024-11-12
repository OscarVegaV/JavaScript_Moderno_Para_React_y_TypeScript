// Fetch API with Async / Await & Try Catch
// Attempting to retrieve data from a specified URL and handle the response

const url = 'https://jsonplaceholder.typicode.com/comments';

/*
// This is a promise-based fetch request, processing each step with .then()
fetch(url)
// First then() handles the initial response
.then((response) => {
  if (response.ok) {
    // If the response status is 200 OK, parse it as JSON
    return response.json();      
  }
  // If the response is not OK, throw an error to be caught in catch()
  throw new Error(`HTTP error! status: ${response.status}`);
})

// Display the retrieved data in the console
.then(data => console.log(data)) // Display the data
// Handle any network issues or errors from above
.catch(error => console.log("Hubo un error, Fetch error: " + error.message));
*/

// Equivalent code using async/await for more readable asynchronous code
const consultAPI = async () => {
  try {
    // Await fetch request to the URL and store the response
    const response = await fetch(url);

    // Check if response status is OK (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Await JSON parsing of the response
    const data = await response.json();

    // Log the retrieved data
    console.log(data);
  } catch (error) {
    // Handle any errors (network issues, non-200 status)
    console.log("Hubo un error, Fetch error: " + error.message);
  }
};

// Call the async function to execute the fetch
consultAPI();
