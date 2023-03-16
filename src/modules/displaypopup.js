import { showComments } from "./showComments";
const populatePopup = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const result = await response.json();
    return result
};

const popupContainer = document.querySelector('.popup-section');
let popup = '';
export const showPopup = async (id) => {
    const popupData = await populatePopup(id);
    const commentedList = await showComments(id)
    const genresList = popupData.genres.map((genre) => `<li>${genre}</li>`).join('');
    popup += `
        <div class="popup-items">
            <div class="icon-container">
                <img src="${popupData.image.medium}" alt="" class="featured-image">
                <a href="" class="x-icon"><i class="fa-solid fa-x"></i></a>
            </div>
            <h2 class="movie-title">${popupData.name}</h2>
            <div class="properties">
                <ul class="genre-list">Genre:${genresList}</ul>
                <p>Language: ${popupData.language}</p>
                <p>Rating: ${popupData.rating.average}</p>
            </div>
            <p class="summary">Summary: ${popupData.summary}</p>
            <div id="comment-container">
                <h3 class="title">Comments</h3>
                <div class="comments">
                
                   <ul class="commented">
                   ${commentedList}
                   </ul> 
                </div>
                <div>
                    <h4 class="title">Add a comment</h4>
                    <form class="input-form" id="form">
                    <input type="text" id="username" class="input" name="addname" placeholder="Your name" /> 
                    <input type="text" id="comment" class="input" name="addscore" placeholder="Your insights" />
                    <button type="submit" id="btnComment-${id}" class="btn">Comment</button>
                    </form>
                </div>
            </div>
      </div>
      `;
      popupContainer.innerHTML = popup;
};


