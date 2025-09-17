//FETCH
// 1. Basic fetch usage
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => console.log('GET:', data))
    .catch(error => console.error('Fetch error:', error));

// 2. POST request with fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log('POST:', data));

// 3. Custom headers and credentials
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
        'Authorization': 'Bearer token'
    },
    credentials: 'same-origin' // or 'include' for cross-origin cookies
})
    .then(response => response.json())
    .then(data => console.log('With headers:', data));

// 4. Handling errors (network and HTTP)
fetch('https://jsonplaceholder.typicode.com/404')
    .then(response => {
        if (!response.ok) throw new Error('HTTP error ' + response.status);
        return response.json();
    })
    .catch(error => console.error('Error handling:', error));

// 5. Abort fetch with AbortController
const controller = new AbortController();
fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
    .then(response => response.json())
    .then(data => console.log('Abort example:', data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error(error);
        }
    });
controller.abort(); // Aborts the fetch

// 6. Async/await syntax
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if (!response.ok) throw new Error('HTTP error');
        const data = await response.json();
        console.log('Async/await:', data);
    } catch (error) {
        console.error('Async/await error:', error);
    }
}
fetchData();

// 7. Parsing other response types
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.text())
    .then(text => console.log('Text response:', text));

// 8. Note: fetch does NOT reject on HTTP error status (only on network failure or abort)