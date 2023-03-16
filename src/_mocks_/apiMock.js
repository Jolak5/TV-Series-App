/* eslint-disable object-shorthand */
let globalThis;
const fetch = require('cross-fetch');

globalThis.fetch = fetch;

const getMovies = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const response = await request.json();
  return response;
};

const postMovies = async (userID, title, completed) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: userID,
      title: title,
      completed: completed,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const request = await res.text();
  return request;
};

export { getMovies, postMovies };
