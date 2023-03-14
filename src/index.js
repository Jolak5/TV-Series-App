import _, { method } from 'lodash';
import './style.css';
import { render } from './modules/homepage';
import { postData, populateLikes, displayLikes } from './modules/likes';

document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    if (e.target.id === i.toString()) {
      postData(i);
      displayLikes(i);
    }
  }
});

populateLikes();
