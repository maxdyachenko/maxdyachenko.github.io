import React from 'react'
import Card from '../../components/card/Card'
import {connect} from 'react-redux'
import {openPopup} from '../../actions/index'
import AddBlock from './AddCard'
import Isotope from 'isotope-layout'
require('isotope-masonry-horizontal');

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(()=> {this.msnry = new Isotope(this.grid, {
            percentPosition: true,
            sortBy: "order",
            layoutMode: 'masonryHorizontal',
        }
        );}, 300)
    }

    componentDidUpdate() {
        this.msnry.reloadItems();
        this.msnry.layout();
        this.msnry.arrange({ sortBy: "order" });
    }

    render() {
        const {blocks, openPopupHandler} = this.props;
        return (
            <div
                className={'masonry-gallery'}
                ref={ (node) => this.grid = node }
            >
                {
                    blocks.map(block => {
                        return <Card
                            key={block.id}
                            likes={block.likes}
                            dislikes={block.dislikes}
                            comments={block.comments}
                            image={block.image}
                            onOpenPopup={ () => openPopupHandler(block.id)}
                        />
                    })
                }
                <AddBlock/>
            </div>
        );
    };
}

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