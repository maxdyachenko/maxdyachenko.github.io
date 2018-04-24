import React from 'react'
import PopupRightMain from '../../components/popup/PopupRightMain'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => element.popupOpen )
    };
};

const PopupRightMainContainer = connect(mapStateToProps)(PopupRightMain);

export default PopupRightMainContainer;