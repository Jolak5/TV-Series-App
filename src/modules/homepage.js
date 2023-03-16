

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
            <i id="${i}" class="fa-regular fa-heart "></i>
              <div class="likesContainer"></div>
            </div>
          </div>
          <button class="comment-btn" id="btn-${jsonData[i].id}">Comments</button>
          <button class="${i}">Reservations</button>
        </div>`;
    }
    container.innerHTML = item;
};

render();

const showMore = async () => {
  let container = document.querySelector('.whole-container').children.length;
  let showSpan = document.querySelector('.showSpan');
  showSpan.innerHTML = container;

  console.log(container);
  const jsonData = await getData();
  const wholeContainer = document.querySelector('.whole-container');
  let item = '';
  for (let i = container; i < container + 6; i++) {
    item += `
    <div class="item">
        <img src="${jsonData[i].image.medium}" alt="" />
        <div class="details">
          <p>${jsonData[i].name}</p>
          <div>
          <i id="${i}" class="fa-regular fa-heart "></i>
            <div class="likesContainer"></div>
          </div>
        </div>
        <button class="comment-btn" id="btn-${jsonData[i].id}">Comments</button>
        <button class="${i}">Reservations</button>
      </div>`;
  }
  wholeContainer.insertAdjacentHTML('beforeend', item);
};

let showBtn = document.querySelector('.showBtn');

showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMore();
});

export { render };
