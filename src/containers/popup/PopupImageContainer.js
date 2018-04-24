import React from 'react'
import PopupImage from '../../components/popup/PopupImage'
import { connect } from 'react-redux'
import { addLike } from '../../actions/index'
import { addDislike } from '../../actions/index'

const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => element.popupOpen )
    };
};

const mapDispatchToProps = (dispatch) => {
    return  {
        onAddLike: (id) => {
            dispatch(addLike(id));
        },
        onAddDislike: (id) => {
            dispatch(addDislike(id));
        }
    };
};

const PopupImageContainer = connect(mapStateToProps, mapDispatchToProps)(PopupImage);

export default PopupImageContainer;