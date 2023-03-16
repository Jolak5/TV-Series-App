import { getShowCommentData } from './comments'
const commentData = document.querySelector('.comments');
export const showComments = async (id) => {
    let commented = '';
    let commentList = '';
    const displayComments = await getShowCommentData(id)
    console.log(displayComments)
    if (displayComments.error){
        commentList = '<li>There are no comments at this point</li>'
    }
    else {
        commentList = displayComments.map((comment) => `<li>${comment.creation_date} ${comment.username} : ${comment.comment}</li>`).join('');
    }
    
    commented += `                                                                                  
     <ul>
     ${commentList}
     </ul> `
    return commented;
}