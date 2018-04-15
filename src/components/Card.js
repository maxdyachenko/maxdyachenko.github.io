import React from 'react'

const Card = ({likes , dislikes, comments, onIncrement, onDecrement, onOpenPopup}) => {
    return (
        <li onClick={() => onOpenPopup() }>
            <button onClick={ () => onIncrement() }>Like</button><span>{likes}</span>
            <button onClick={ () => onDecrement() }>DisLike</button><span>{dislikes}</span>
            <p>Comments: {comments.length}</p>
        </li>
    );
};

export default Card