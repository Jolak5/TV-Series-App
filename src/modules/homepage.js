const getData = async () => {
  const request = await fetch('https://api.tvmaze.com/shows');
  const response = await request.json();
  return response;
};

const render = async () => {
  const container = document.querySelector('.whole-container');
  const jsonData = await getData();
  let item = '';
  for (let i = 0; i < 6; i++) {
    item += `
    <div class="item">
        <img src="${jsonData[i].image.medium}" alt="" />
        <div class="details">
          <p>${jsonData[i].name}</p>
          <div>
          <i class="fa-regular fa-heart"></i>
            <p>likes</p>
          </div>
        </div>
        <button class="${i}">Comments</button>
        <button class="${i}">Reservations</button>
      </div>`;
  }
  container.innerHTML = item;
};

render();

export { render };
