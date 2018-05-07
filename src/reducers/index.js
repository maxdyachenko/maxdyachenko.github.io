import { combineReducers } from 'redux'

const loading = (state = true, action) => {
    if (action.type == 'HANDLE_LOADING')
        return state = action.bool;
    return state;
};

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
                    ? {...block, dislikes: ++block.dislikes}
                    : block
            );
        case 'ADD_BLOCK':
            return [
                ...state,
                {
                    id: action.id,
                    image: action.image,
                    likes: 0,
                    dislikes: 0,
                    comments: [],
                    popupOpen: false
                }
            ];
        case 'ADD_COMMENT':
            return state.map(block =>
                (block.id === action.id)
                    ? {...block, comments: block.comments.concat({date: action.date, user: action.user, text: action.text})}
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
    blocks,
    loading
});


export default reducer