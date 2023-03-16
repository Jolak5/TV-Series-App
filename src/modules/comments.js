const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LOf5L284gEd1pGlHG0AY/comments';

const postShowCommentData = async (userName, comment, id) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      comment,
      item_id: id,
    }),
  });
  return response;
};

const getShowCommentData = async (id) => {
  const fetchUrl = baseUrl.concat(`?item_id=${id}`);
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
};

export { postShowCommentData, getShowCommentData };