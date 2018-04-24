import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/index'

import './PopupCommentsForm.css'

class PopupCommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.user = '';
        this.text = '';
    }

    onSubmitHandler(e) {
        e.preventDefault();
        if (!this.user.value.trim() || !this.text.value.trim()) {
            return;
        }
        const date = new Date();

        const dd = date.getDate();
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        const y = date.getFullYear();

        const formattedDate = dd + '.'+ mm + '.'+ y;
        this.props.dispatch(addComment(this.props.block.id, formattedDate, this.user.value, this.text.value));

        this.user.value = '';
        this.text.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    ref={node => {this.user = node}}
                    placeholder="Type your nickname here..."
                    className="user-input"
                />
                <div className="submit-footer">
                    <textarea
                        ref={node => { this.text = node }}
                        placeholder="Write your comment here..."
                        className="text-input"
                    />
                    <button type="submit" className="submit-button"></button>
                </div>
            </form>
        );
    }
}
PopupCommentsForm.defaultProps = {
    block: {}
};

const mapStateToProps = (state) => {
    return {
        block: state.blocks.find((element, index, array) => element.popupOpen )
    };
};

PopupCommentsForm = connect(mapStateToProps)(PopupCommentsForm);

export default PopupCommentsForm;