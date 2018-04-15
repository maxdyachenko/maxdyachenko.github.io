import React from 'react'
import uuid from 'uuid'

let Popup = ({block = {comments: []}, onClosePopup, onAddLike, onAddDislike, onAddComment}) => {
    let input;

    return (
        <div style={{display: block.popupOpen ? 'block' : 'none'}}>
            <p>Likes:{block.likes}</p>
            <p>DisLikes:{block.dislikes}</p>
            <button onClick={() => onAddLike(block.id) }>Like</button>
            <button onClick={() => onAddDislike(block.id) }>Dislike</button>
            <button onClick={() => onClosePopup() }>Close</button>
            <p>Comments: </p>
            <ul>
                {
                    block.comments.map( (comment) => {
                        return (
                            <li key={uuid()}>
                                {comment}
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                onAddComment(block.id, input.value);
                input.value = '';
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default Popup;