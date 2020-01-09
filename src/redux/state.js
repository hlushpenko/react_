import {rerenderEntireTree} from "../render";

let state;
state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi, how a u', like: 1},
            {id: 2, text: 'Its my f post', like: 55}
        ],

    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Vova'},
            {id: 2, name: 'Nick'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Vanya'},
            {id: 5, name: 'David'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: ')))))))))))))'}
        ]
    }

};

export let addPost = (postMessage) =>{
    let newPost = {
       id:5,
       text: postMessage,
       like: 0
    };
    console.log(newPost);
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;