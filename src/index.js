import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app/App'
import reducer from './reducers'
import throttle from 'lodash/throttle'
import defaultState from './config'
import { loadState, saveState } from './modules/localstorage'

const persistedState = loadState(defaultState);

const store = createStore(reducer, persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
