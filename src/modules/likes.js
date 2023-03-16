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
  return res

};

const getData = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/likes',
  );
  const response = await res.json();
  return response;
};

const populateLikes = async (i) => {
  const response = await getData();
  for (let i = 0; i < 6; i++) {
    const container = document.getElementsByClassName('likesContainer')[i];
    container.innerHTML = `<span>${response[i].likes}</span>`;
  }
};

export { populateLikes, postData, getData };
