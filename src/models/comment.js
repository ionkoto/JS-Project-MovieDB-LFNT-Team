import {get, post, del} from './requester';


function create(commentAuthor, commentText, movieId, callback) {
    let commentData = {
        commentAuthor: commentAuthor,
        commentText: commentText,
        movieId: movieId
    };
    post('appdata', 'comments', commentData, 'kinvey')
        .then(callback(true));
}

// function deleteComment(commentId, callback){
//     del('appdata', 'comments/' + commentId, 'kinvey')
//         .then(callback(true))
// }

function loadComments(movieId, onCommentsSuccess) {
    get('appdata', `comments/?query={"movieId": "${movieId}"}`, 'kinvey')
        .then(onCommentsSuccess);
}

export {loadComments, create}