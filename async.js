
// Dummy API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Async function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl); // Wait for the fetch operation to complete
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Wait for the JSON parsing to complete
        return data;
    } catch (error) {
        // console.error('Error fetching data:', error);
        throw error; // Rethrow the error if needed
    }
}

// function fetchData() {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch(apiUrl);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             resolve(data);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

const successHandler = (result) => {
    console.log('Data fetched successfully:', result);
    // show data in a table
}

const rejectionHandler = (errpr) => {
    console.error('Failed to fetch data:', Error);
    // setError(errpr)
}

const finallyHandler = () => {
    //setLoader(false)
    console.log('api has been called, hide the loader')
};

// Example usage of the async function
async function main() {
    console.log('Fetching data from the API...');
    fetchData().then(successHandler).catch(rejectionHandler).finally(finallyHandler); // Wait for fetchData to complete
}

// Call the main function to run the async code
main();


