import React from 'react'

import './Card.css'

const Card = ({likes , dislikes, comments, image, onOpenPopup}) => {
    return (
        <div className="image-block" onClick={() => onOpenPopup() }>
            <img src={image} alt="Image"/>
            <div className="image-footer">
                <div className="dislikes-indicator">
                    <p>{dislikes}</p>
                </div>
                <div className="likes-indicator">
                    <p>{likes}</p>
                </div>
                <div className="comments-indicator">
                    <p>{comments.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Card