import './style.css';
import showPopup from './modules/displaypopup.js';
import { postShowCommentData } from './modules/comments.js';
import showComments from './modules/showComments.js';
import { showMore } from './modules/homepage.js';
import { populateLikes, postData, getData } from './modules/likes.js';
import countItems from './modules/countItems.js';

const showBtn = document.querySelector('.showBtn');
const homepage = document.querySelector('.whole-container');
const showMovieDetails = document.querySelector('.popup-section');

document.addEventListener('click', async (event) => {
  event.preventDefault();
  let commentId;
//   if (event.target.className === 'fa-regular fa-heart') {
//     commentId = event.target.id;
//     const commentIndex = Number(commentId) - 1;
//     const postLike = await postData(commentIndex);
//     if (postLike.status === 201) {
//       const response = await getData();
//       const container = document.getElementsByClassName('likesContainer')[commentIndex];
//       container.innerHTML = `<span>${response[commentIndex].likes}</span>`;
//     }
//   }

  if (event.target.className === 'comment-btn') {
    commentId = event.target.id.split('-')[1];
    await showPopup(commentId);
    homepage.style.display = 'none';
    showMovieDetails.style.display = 'block';
    await showComments(commentId);
  }

  if (event.target.className === 'btn') {
    commentId = event.target.id.split('-')[1];
    const form = document.querySelector('#form');
    form.onsubmit = async (e) => {
      e.preventDefault();
      const userName = document.getElementById('username');
      const comment = document.getElementById('comment');
      const postCommentData = await postShowCommentData(userName.value, comment.value, commentId);
      if (postCommentData.status === 201) {
        const commentedList = await showComments(commentId);
        const commentData = document.querySelector('.comments');
        commentData.innerHTML = `<ul>
                ${commentedList}
                </ul>`;
      }

      form.reset();
    };
  }

  if (event.target.className === 'fa-solid fa-x'){
    homepage.style.display = 'grid';
    showMovieDetails.style.display = 'none';
  }
});

showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMore();
  countItems();
});

populateLikes();
countItems();
