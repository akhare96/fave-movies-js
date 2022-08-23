console.log("test...")

const BACKEND_URL = 'http://localhost:3000';
const hello = fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));