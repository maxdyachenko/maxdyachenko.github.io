import React from 'react'
import CardList from '../../containers/card/CardList'
import Popup from '../../containers/popup/PopupWrapperContainer'
import Header from './Header'

import './App.css'


const App = () => (
    <div className="main-container">
        <Header />
        <CardList />
        <Popup />
    </div>
);

export default App
