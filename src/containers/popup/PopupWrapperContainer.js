import React from 'react'
import Popup from '../../components/popup/Popup'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => element.popupOpen )
    };
};

const PopupWrapperContainer = connect(mapStateToProps)(Popup);

export default PopupWrapperContainer;