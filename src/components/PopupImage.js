import React from 'react'

const PopupImage = ({id, image, likes, dislikes}) => {
    return (
        <div className="image-container">
            <img src={image ? "../images/" + image : ""} alt="Image"/>
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