import React from 'react'

import './PopupImage.css'

const PopupImage = ({block = {}, onAddDislike, onAddLike}) => {
    const {image, id, dislikes, likes} = block;
    return (
        <div className="image-container">
            <img src={image ? image : ""} alt="Image"/>
            <div className="footer">
                <div className="dislikes-indicator popup-indicator" onClick={() => onAddDislike(id) }>
                    <p>{dislikes}</p>
                </div>
                <div className="likes-indicator popup-indicator" onClick={() => onAddLike(id) }>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    );
};

export default PopupImage;