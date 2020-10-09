
export function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}
