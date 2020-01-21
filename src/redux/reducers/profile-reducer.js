const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializeState = {
    posts: [
        {id: 1, text: 'Hi, how a u', like: 1},
        {id: 2, text: 'Its my f post', like: 55}
    ],
    newPostText: ''
};

const profileReducer = (state = initializeState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;