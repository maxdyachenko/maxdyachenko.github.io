import uuid from 'uuid'

export const addLike = (id) => ({
    type: 'ADD_LIKE',
    id
});

export const addDislike = (id) => ({
    type: 'ADD_DISLIKE',
    id
});

export const addBlock = () => ({
    type: 'ADD_BLOCK',
    id: uuid()
});

export const addComment = (id, text) => ({
    type: 'ADD_COMMENT',
    text,
    id
});

export const openPopup = (id) => ({
    type: 'OPEN_POPUP',
    id
});

export const closePopup = () => ({
   type: 'CLOSE_POPUP'
});