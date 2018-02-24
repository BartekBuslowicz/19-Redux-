function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];
        case REMOVE_COMMENT:
            return 
            	comments: state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
        	return 
        		comments: state.comments.map(comment => {
        			if(comment.id === action.id) {
        				return {...comment, text: action.text, ...comment}
        			}
        		});
        case THUMB_UP_COMMENT:
        	return 
        		comments: state.comments.map(comment => {
        			if(comment.id === action.id) {
        				return {...comment, votes: votes + 1}
        			}
        		});
        case THUMB_UP_COMMENT:
        	return 
        		comments: state.comments.map(comment => {
        			if(comment.id === action.id) {
        				return {...comment, votes: votes - 1}
        			}
        		});
        default:
            return state;
    }
}