import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { openPopup } from '../actions/index'

let CardList = ({blocks, openPopupHandler}) => {
    return (
        <div>
            {
                blocks.map( block => {
                    return <Card
                        key = {block.id}
                        likes = {block.likes}
                        dislikes = {block.dislikes}
                        comments = {block.comments}
                        image = {block.image}
                        onOpenPopup = { () => openPopupHandler(block.id)}
                    />
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPopupHandler: (id) => {
            dispatch(openPopup(id))
        }
    }
};


CardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardList;