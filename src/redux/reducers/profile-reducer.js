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

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 0
            };
            if (newPost.text) {
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
};





export const addPostActionCreator = () => ({type: ADD_POST });
export const changePostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;