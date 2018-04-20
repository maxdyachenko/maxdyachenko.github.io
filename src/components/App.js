import React from 'react'
import CardList from '../containers/CardList'
import AddBlock from '../containers/AddBlock'
import Popup from '../containers/PopupContainer'
import Header from './Header'

import './App.css'


const App = () => (
    <div className="main-container">
        <Header />
        <div id="gallery">
            <AddBlock />
            <CardList />
        </div>
        <Popup />
    </div>
);

export default App
