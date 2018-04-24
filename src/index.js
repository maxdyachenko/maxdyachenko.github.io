import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/app/App'
import reducer from './reducers'
import uuid from 'uuid'

const initialState = {
    blocks: [
        {
            id: uuid(),
            likes: 1,
            dislikes: 0,
            image: "../images/Image.png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 1,
            dislikes: 0,
            image: "../images/Image (1).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 2,
            dislikes: 3,
            image: "../images/Image (2).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 1,
            dislikes: 0,
            image: "../images/Image (3).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "te22st",
                    text: "jus222t test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (4).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (4).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (4).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (1).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (4).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
        },
        {
            id: uuid(),
            likes: 3,
            dislikes: 1,
            image: "../images/Image (1).png",
            comments: [
                {
                    date: "01.01.1998",
                    user: "test",
                    text: "just test"
                }
            ],
            popupOpen: false
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
