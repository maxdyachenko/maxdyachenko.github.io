import { combineReducers } from 'redux'

const blocks =  (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return state.map(block =>
                (block.id === action.id)
                    ? {...block, likes: ++block.likes}
                    : block
            );
        case 'ADD_DISLIKE':
            return state.map(block =>
                (block.id === action.id)
                    ? {...block, dislikes: --block.dislikes}
                    : block
            );
        case 'ADD_BLOCK':
            return [
                ...state,
                {
                    id: action.id,
                    likes: 0,
                    dislikes: 0,
                    comments: [],
                    popupOpen: false
                }
            ];
        case 'ADD_COMMENT':
            return state.map(block =>
                (block.id === action.id)
                    ? {...block, comments: block.comments.concat(action.text)}
                    : block
            );
        case 'OPEN_POPUP':
            return state.map(block =>
                (block.id === action.id)
                    ? {...block, popupOpen: true}
                    : block
            );
        case 'CLOSE_POPUP':
            return state.map(block =>
                (block.popupOpen)
                    ? {...block, popupOpen: false}
                    : block
            );
        default:
            return state;

    }
};

const reducer = combineReducers({
    blocks
});


export default reducer