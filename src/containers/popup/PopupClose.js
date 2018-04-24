import React from 'react'
import { closePopup } from '../../actions/index'
import { connect } from 'react-redux'

import './PopupClose.css'

let PopupClose = ({dispatch}) => {
    return (
        <div onClick={() => dispatch(closePopup()) } className="close-button"></div>
    );
};

PopupClose = connect()(PopupClose);

export default PopupClose;