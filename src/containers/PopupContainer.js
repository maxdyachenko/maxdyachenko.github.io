import React from 'react'
import Popup from '../components/Popup'
import { connect } from 'react-redux'
import { closePopup } from '../actions/index'
import { addLike } from '../actions/index'
import { addDislike } from '../actions/index'
import { addComment} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => {
            if (element.popupOpen) {
                return true;
            }
        })
    };
};

const mapDispatchToProps = (dispatch) => {
    return  {
        onClosePopup: () => {
            dispatch(closePopup());
        },
        onAddLike: (id) => {
            dispatch(addLike(id));
        },
        onAddDislike: (id) => {
            dispatch(addDislike(id));
        },
        onAddComment: (id, text) => {
            dispatch(addComment(id, text));
        }
    };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);
export default Popup;