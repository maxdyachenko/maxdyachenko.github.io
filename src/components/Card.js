import React from 'react'

const Card = ({likes , dislikes, onIncrement, onDecrement}) => {
    return (
        <li>
            <button onClick={ () => onIncrement() }>Like</button><span>{likes}</span>
            <button onClick={ () => onDecrement() }>DisLike</button><span>{dislikes}</span>
        </li>
    );
};

export default Card