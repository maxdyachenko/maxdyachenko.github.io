import React from 'react'
import uuid from 'uuid'

import './Popup.css'

const Popup = ({block = {comments: []}, onClosePopup, onAddLike, onAddDislike, onAddComment}) => {
    let user, text;

    return (
        <div className="popup" style={{display: block.popupOpen ? 'flex' : 'none'}}>
            <div className="popup-content">
                <div onClick={() => onClosePopup() } className="close-button"></div>
                <div className="image-container">
                    <img src={block.image ? "../images/" + block.image : ""} alt="Image"/>
                    <div className="footer">
                        <div className="dislikes-indicator popup-indicator" onClick={() => onAddDislike(block.id) }>
                            <p>{block.dislikes}</p>
                        </div>
                        <div className="likes-indicator popup-indicator" onClick={() => onAddLike(block.id) }>
                            <p>{block.likes}</p>
                        </div>
                    </div>
                </div>
                <div className="comments-container">
                    <div className="content">
                        <h2>Comments: {block.comments.length}</h2>
                        <ul>
                            {
                                block.comments.map((comment) => {
                                    return (
                                        <li key={uuid()} className="comment">
                                            <div className="info">
                                                <p>{comment.user}</p>
                                                <p>{comment.date}</p>
                                            </div>
                                            <p className="comment-text">{comment.text}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (!user.value.trim() || !text.value.trim()) {
                            return;
                        }
                        const date = new Date();

                        const dd = date.getDate();
                        let mm = date.getMonth() + 1;
                        if (mm < 10) mm = '0' + mm;
                        const y = date.getFullYear();

                        const formattedDate = dd + '.' + mm + '.' + y;
                        onAddComment(block.id, formattedDate, user.value, text.value);
                        user.value = '';
                        text.value = '';
                    }}>
                        <input ref={node => {
                            user = node
                        }}
                               placeholder="Type your nickname here..."
                               className="user-input"
                        />
                        <div className="submit-footer">
                            <textarea ref={node => {
                                text = node
                            }}
                                      placeholder="Write your comment here..."
                                      className="text-input"
                            />
                            <button type="submit" className="submit-button">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;