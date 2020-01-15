let rerenderEntireTree = () =>{
  console.log("S ch")
};

let state;
state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi, how a u', like: 1},
            {id: 2, text: 'Its my f post', like: 55}
        ],
        newPostText: ''

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

window.state = state;

export const addPost = () =>{
    let newPost = {
       id:5,
       text: state.profilePage.newPostText,
       like: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  //Спостережувач OBSERVER
};


export default state;