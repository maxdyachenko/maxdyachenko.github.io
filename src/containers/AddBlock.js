import React from 'react'
import { connect } from 'react-redux'
import { addBlock } from '../actions'

let AddBlock = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addBlock());
                input.value = '';
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Block
                </button>
            </form>
        </div>
    )
};

AddBlock = connect()(AddBlock);

export default AddBlock