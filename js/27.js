// Performance & Multiple Async Await
// Measuring the execution time for multiple asynchronous fetch requests with different methods

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/photos';


// Method 1: Sequential Fetch Requests with Await
const consultAPI = async () => {
  try {
    const init = performance.now(); // Record start time for performance measurement
    // Await fetch request to the URL and store the response    
    //const response = await fetch(url);
    // Check if response status is OK (status 200)
    //if (!response.ok) {
      //  throw new Error(`HTTP error! status: ${response.status}`);
    //}

    // Fetch and log data from first URL
    const response = await fetch(url);      
    // Await JSON parsing of the response
    const data = await response.json();
    // Log the retrieved data
    console.log(data);

    // Fetch and log data from second URL
    const response2 = await fetch(url2);      
     // Await JSON parsing of the response
     const data2 = await response2.json();
     // Log the retrieved data
     console.log(data2);

    // Fetch and log data from third URL
    const response3 = await fetch(url3);      
    // Await JSON parsing of the response
    const data3 = await response3.json();
    // Log the retrieved data
    console.log(data3);


    const end = performance.now(); // Record end time for performance measurement

    console.log(`El resultado de la primer fucion es: ${end - init} ms`);
    
  } catch (error) {
    // Handle any errors (network issues, non-200 status)
    console.log("Hubo un error, Fetch error: " + error.message);
  }
};


// Method 2: Concurrent Fetch Requests with Promise.all
const consultAPI02 = async () => {
  try {
    const init = performance.now(); // Record start time for performance measurement
    
    // Concurrently fetch all URLs and wait for all responses
    const [response, response2, response3] =  await Promise.all ([ fetch(url), fetch(url2), fetch(url3) ]);

    // Parse JSON responses concurrently
    const [data, data2, data3] = await Promise.all ([response.json(), response2.json(), response3.json() ]);

    console.log(data);
    console.log(data2);
    console.log(data3);


    const end = performance.now();// Record end time for performance measurement

    console.log(`El resultado de la segunda funcion es es: ${end - init} ms`);
    
  } catch (error) {
    // Handle any errors (network issues, non-200 status)
    console.log("Hubo un error, Fetch error: " + error.message);
  }
};

// Execute both functions to compare performance
consultAPI();
consultAPI02();