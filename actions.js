import uuid from uuid;

const CREATE_COMENT = 'CREATE_COMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';




function addComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));
boundAddComment('komentarz!');



function removeComment(id) {
	return {
	    type: REMOVE_COMMENT,
	    id
	}
}
const boundRemoveComment = id => dispatch(id));
boundRemoveComment(1);

function editComment(id, text) {
	return {
	    type: EDIT_COMMENT,
	    id,
	    text
	}
}
const boundEditComment = (id, text) => dispatch(id, text));
boundEditComment(1, 'nowy komentarz!');


function thumbUpComment(id, counter) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		counter: counter + 1
	}
}
const boundThumbUpComment = id =>(id));
boundThumbUpComment(1);


function thumbDownComment(id, counter) {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		counter: counter - 1
	}
}
const boundThumbUpComment = id =>(id));
boundThumbUpComment(1);