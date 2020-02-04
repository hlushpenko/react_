const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initializeState = {
    posts: [
        {id: 1, text: 'Hi, how a u', like: 1},
        {id: 2, text: 'Its my f post', like: 55}
    ],
    newPostText: '',
    profile: null
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
        case SET_USERS_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};


export const addPost = () => ({type: ADD_POST});
export const changePost = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});


export default profileReducer;