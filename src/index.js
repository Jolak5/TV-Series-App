import _, { method } from 'lodash';
import './style.css';
import { render } from './modules/homepage';
import { postData, populateLikes, displayLikes } from './modules/likes';
import { showPopup } from './modules/displaypopup';
import { postShowCommentData } from './modules/comments';
import { showComments } from './modules/showComments';

document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    if (e.target.id === i.toString()) {
      postData(i);
      displayLikes(i);
    }
  }
});

const homepage = document.querySelector('.whole-container')
const showMovieDetails = document.querySelector('.popup-section')
// const commentDetails = document.querySelector('#comment-container')
const form = document.querySelector('.input-form');
const userName = document.getElementById('username');
const comment = document.getElementById('comment');

document.addEventListener('click', async (event) => {
    let commentId
    if (event.target.className === 'comment-btn') {
        commentId = event.target.id.split('-')[1];
        await showPopup(commentId)
        homepage.style.display = 'none';
        showMovieDetails.style.display = 'block';
        await showComments(commentId);
    }

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log(e.target, commentId)
    //     // const commentDetails = {
    //     //     username: userName,
    //     //     comment: insight,
    //     //     item_id: id,
    //     // };
      
    //     // addScore(commentDetails, message);
    //     form.reset();
    //   });

    if (event.target.className === 'btn') {
        commentId = event.target.id.split('-')[1];
        // console.log(commentId, userName, comment)

        // const form = document.querySelector('#form');
        const form = document.querySelector('#form');
        // const popupContainer = document.querySelector('.popup-section');
        // const commentSection = document.querySelector('#commentSection');
        // const movieCount = document.querySelector('#movieCount');
        form.onsubmit = async (e) => {
            e.preventDefault();
            // const username = document.querySelector('#name');
            // const insight = document.querySelector('#insight');}
            const userName = document.getElementById('username');
            const comment = document.getElementById('comment');

            console.log(commentId, userName.value, comment.value)
            const postCommentData = await postShowCommentData(userName.value,comment.value,commentId)
            if (postCommentData.status === 201){
                const commentedList = await showComments(commentId)
                const commentData = document.querySelector('.comments');
                commentData.innerHTML = `<ul>
                ${commentedList}
                </ul>`
            }

            form.reset();
            // popupContainer.innerHTML = '';
        }
        // await showPopup(commentId)
        // const commentedList = await showComments(commentId)
        // const commentData = document.querySelector('.comments');
        // commentData.innerHTML = `<ul>
        // ${commentedList}
        // </ul>`
    }

    // if (event.target.className === 'input-form') {
    //     // form.addEventListener('submit', (e) => {
    //     //     e.preventDefault();
        
    //         console.log(event.target)
    //         // const commentDetails = {
    //         //     username: userName,
    //         //     comment: insight,
    //         //     item_id: id,
    //         // };
        
    //         // addScore(commentDetails, message);
    //         // form.reset();
    //     // });
    //     // console.log("iygtufgty")
    //     // const commentId = event.target.id.split('-')[1];
    // }
  });


populateLikes();

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target)
//     // const commentDetails = {
//     //     username: userName,
//     //     comment: insight,
//     //     item_id: id,
//     // };
  
//     // addScore(commentDetails, message);
//     form.reset();
//   });


