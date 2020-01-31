import React from 'react';
import './App.css';
// import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Layout} from "antd";
const { Header, Content } = Layout;


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header>
                    <Nav/>
                </Header>
                <Content>

                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/> }/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                </Content>
            </Layout>
        </BrowserRouter>

    );
};

export default App;
