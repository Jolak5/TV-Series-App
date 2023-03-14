const postData1 = async (i) => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'hi',
      }),
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const request = await res.text();
  console.log(request);
};

postData1();

export { postData1 };
