import React from 'react'
import Popup from '../components/Popup'
import { connect } from 'react-redux'
import { closePopup } from '../actions/index'
import { addLike } from '../actions/index'
import { addDislike } from '../actions/index'
import { addComment} from '../actions/index'

const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => element.popupOpen )
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
        onAddComment: (id, date, user, text) => {
            dispatch(addComment(id, date, user, text));
        }
    };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(Popup);
export default PopupContainer;