import { postMovies, getMovies } from '../../_mocks_/apiMock.js';

describe('countLikes to be a number', () => {
  test('should retrieve data from API', async () => {
    const data = await getMovies();
    expect(data.title).toEqual('quis ut nam facilis et officia qui');
  });

  test('should send Data to API', async () => {
    // const post = await postMovies(2, 'How are you', false);
    expect(postMovies()).toBeDefined();
  });
});
