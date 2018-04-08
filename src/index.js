import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import uuid from 'uuid'

const initialState = {
    blocks: [
        {
            id: uuid(),
            likes: 1,
            dislikes: 0
        }
    ]
};

const store = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
