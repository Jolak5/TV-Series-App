import { getShowCommentData } from './comments.js';

const showComments = async (id) => {
  let commented = '';
  let commentList = '';
  const displayComments = await getShowCommentData(id);
  if (displayComments.error) {
    commentList = '<li>There are no comments at this point</li>';
  } else {
    commentList = displayComments.map((comment) => `<li>${comment.creation_date} ${comment.username} : ${comment.comment}</li>`).join('');
  }

  commented += `                                                                                  
     <ul>
     ${commentList}
     </ul> `;
  return commented;
};

export default showComments;