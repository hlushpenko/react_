import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store  = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;