import React from 'react'
import uuid from 'uuid'

import './PopupRightMain.css'

const PopupRightMain = ({block = {comments: []}}) => {
    const {comments} = block;
    return (
        <div className="content">
            <h2>Comments: {comments.length}</h2>
            <ul>
                {
                    comments.map((comment) => {
                        return (
                            <li
                                key={uuid()}
                                className="comment"
                            >
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
    );
};

export default PopupRightMain;