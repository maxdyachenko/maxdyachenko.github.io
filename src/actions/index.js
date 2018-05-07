import uuid from 'uuid'

export const addLike = (id) => ({
    type: 'ADD_LIKE',
    id
});

export const addDislike = (id) => ({
    type: 'ADD_DISLIKE',
    id
});

export const addBlock = (image) => ({
    type: 'ADD_BLOCK',
    image,
    id: uuid()
});

export const addComment = (id, date, user, text) => ({
    type: 'ADD_COMMENT',
    date,
    text,
    user,
    id
});

export const openPopup = (id) => ({
    type: 'OPEN_POPUP',
    id
});

export const closePopup = () => ({
   type: 'CLOSE_POPUP'
});

export const handleLoading = (bool) => ({
    type: 'HANDLE_LOADING',
    bool
});