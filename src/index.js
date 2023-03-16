/* eslint-disable no-plusplus */
// import _, { method } from 'lodash';
import './style.css';
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

showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showMore();
  countItems();
});

populateLikes();
countItems();
