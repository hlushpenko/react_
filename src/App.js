import React from 'react';
import './App.css';


import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";



const App = () => {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    );
};

export default App;
