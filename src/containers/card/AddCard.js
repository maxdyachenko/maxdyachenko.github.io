import React from 'react'
import {connect} from 'react-redux'
import {addBlock} from '../../actions'

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.input = '';
    }

    onChangeHandler() {
        const file = this.input.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                this.props.dispatch(addBlock(event.target.result));
            };

            reader.readAsDataURL(file);
        }
        this.input.value = '';
    }

    render() {
        return (
            <div className="add-card">
                <form>
                    <input type="file" ref={node => {
                        this.input = node
                    }} onChange={this.onChangeHandler}/>
                    <div className="add-image"></div>
                    <p>Add your picture</p>
                </form>
            </div>
        )
    }
}

AddCard = connect()(AddCard);

export default AddCard