import React from 'react'
import Card from '../../components/card/Card'
import {connect} from 'react-redux'
import {openPopup, handleLoading} from '../../actions/index'
import AddBlock from './AddCard'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
require('isotope-masonry-horizontal');

class CardList extends React.Component {
    componentDidMount() {
        imagesLoaded(this.grid, ()=> {
            this.msnry = new Isotope(this.grid, {
                    percentPosition: true,
                    sortBy: "order",
                    layoutMode: 'masonryHorizontal',
                }
            );
            this.props.onLoading(false);
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.blocks.length !== this.props.blocks.length) {
            this.props.onLoading(true);
            imagesLoaded(this.grid, ()=> {
                this.msnry.reloadItems();
                this.msnry.layout();
                this.msnry.arrange({sortBy: "order"});
                this.props.onLoading(false);
            });
        }
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
        blocks: state.blocks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPopupHandler: (id) => {
            dispatch(openPopup(id))
        },
        onLoading: (bool) => {
            dispatch(handleLoading(bool))
        }
    }
};


CardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardList;