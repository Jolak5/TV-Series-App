/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const postData = async (i) => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: i,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const request = await res.text();
  return request;
};

const getData = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/likes',
  );
  const response = await res.json();
  return response;
};

const displayLikes = async (i) => {
  const response = await getData();
  const container = document.getElementsByClassName('likesContainer')[i];
  container.innerHTML = `<span>${response[i].likes}</span>`;
};

const populateLikes = async (i) => {
  const response = await getData();
  for (let i = 0; i < 6; i++) {
    const container = document.getElementsByClassName('likesContainer')[i];
    container.innerHTML = `<span>${response[i].likes}</span>`;
  }
};

export {
  getData, displayLikes, populateLikes, postData,
};
