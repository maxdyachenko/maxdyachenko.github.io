import React from 'react'
import PopupRightMainContainer from '../../containers/popup/PopupRightMainContainer'
import PopupCommentsForm from '../../containers/popup/PopupCommentsForm'

import './PopupRightContent.css'

const PopupRightContent = () => {
    return (
        <div className="comments-container">
            <PopupRightMainContainer />
            <PopupCommentsForm />
        </div>
    );
};

export  default PopupRightContent;