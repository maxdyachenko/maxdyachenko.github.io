import React from 'react'
import { connect } from 'react-redux'
import App from '../../components/app/App'

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
};

const AppContainer = connect(mapStateToProps)(App);

export  default AppContainer;