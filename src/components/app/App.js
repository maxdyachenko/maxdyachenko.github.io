import React from 'react'
import CardList from '../../containers/card/CardList'
import Popup from '../../containers/popup/PopupWrapperContainer'
import Header from './Header'
import Loading from './Loading'

import './App.css'


const App = ({loading}) => (
    <div className="main-container">
        {loading && <Loading />}
        <Header />
        <CardList />
        <Popup />
    </div>
);

export default App
