import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { addLike } from '../actions/index'
import { addDislike } from '../actions/index'

let CardList = ({blocks, addLikeHandler, addDisLikeHandler}) => {
    return (
        <ul>
            {
                blocks.map( block => {
                    return <Card
                        key = {block.id}
                        likes = {block.likes}
                        dislikes = {block.dislikes}
                        onIncrement = {() => addLikeHandler(block.id)}
                        onDecrement = {() => addDisLikeHandler(block.id)}
                    />
                })
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLikeHandler: (id) => {
            dispatch(addLike(id))
        },
        addDisLikeHandler: (id) => {
            dispatch(addDislike(id))
        }
    }
};


CardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardList;