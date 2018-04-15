import React from 'react'
import CardList from '../containers/CardList'
import AddBlock from '../containers/AddBlock'
import Popup from '../containers/PopupContainer'


const App = () => (
    <div>
        <AddBlock />
        <CardList />
        <Popup />
    </div>
);

export default App
