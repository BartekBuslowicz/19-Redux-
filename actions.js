import uuid from uuid;

export const ADD_COMENT = 'ADD_COMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';




function addComment(text) {
    return {
        type: ADD_COMMENT,
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
const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(1);

function editComment(id, text) {
	return {
	    type: EDIT_COMMENT,
	    id,
	    text
	}
}
let boundEditComment = (id, text) => dispatch(editComment(id, text));
boundEditComment(1, 'nowy komentarz!');


function thumbUpComment(id, counter) {
	return {
		type: THUMB_UP_COMMENT,
		id,
		counter: counter + 1
	}
}
let boundThumbUpComment = id => dispatch(thumbUpComment(id));
boundThumbUpComment(1);


function thumbDownComment(id, counter) {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		counter: counter - 1
	}
}
let boundThumbUpComment = id => dispatch(thumbDownComment(id));
boundThumbUpComment(1);