import _, { method } from 'lodash';
import './style.css';
import { render, showMore } from './modules/homepage';
import { displayLikes, populateLikes } from './modules/likes';
import { countItems } from './modules/countItems';

let showBtn = document.querySelector('.showBtn');

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
