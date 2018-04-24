import React from 'react'
import PopupRightContent from './PopupRightContent'
import PopupClose from '../../containers/popup/PopupClose'
import PopupImageContainer from '../../containers/popup/PopupImageContainer'

import './Popup.css'

const Popup = ({block = {}}) => {
    return (
        <div className="popup" style={{display: block.popupOpen ? 'flex' : 'none'}}>
            <div className="popup-content">
                <PopupImageContainer />
                <PopupRightContent />
                <PopupClose />
            </div>
        </div>
    );
};

export default Popup;