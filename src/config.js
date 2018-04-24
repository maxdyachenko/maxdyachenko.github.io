import uuid from 'uuid'

const state = {
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
            image: "../images/Image (3).png",
            comments: [
                {
                    date: "01.01.1922",
                    user: "test",
                    text: "just te111st"
                }
            ],
            popupOpen: false
        }
    ]
};

export default state;