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