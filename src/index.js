import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './containers/app/AppContainer'
import reducer from './reducers'
import throttle from 'lodash/throttle'
import defaultState from './config'
import { loadState, saveState } from './modules/localstorage'

const persistedState = loadState(defaultState);
console.log(defaultState)
const store = createStore(reducer, persistedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
    saveState({blocks: store.getState().blocks, loading: true});
}, 1000));

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
