/* eslint-disable no-plusplus */
// import _, { method } from 'lodash';
import './style.css';
import showPopup from './modules/displaypopup.js';
import { postShowCommentData } from './modules/comments.js';
import showComments from './modules/showComments.js';
import { showMore } from './modules/homepage.js';
import { displayLikes, populateLikes, postData } from './modules/likes.js';
import countItems from './modules/countItems.js';

const showBtn = document.querySelector('.showBtn');

document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    if (e.target.id === i.toString()) {
      postData(i);
      displayLikes(i);
    }
  }
});

const homepage = document.querySelector('.whole-container');
const showMovieDetails = document.querySelector('.popup-section');

document.addEventListener('click', async (event) => {
  let commentId;
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
});

populateLikes();

showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMore();
  countItems();
});

populateLikes();
countItems();
