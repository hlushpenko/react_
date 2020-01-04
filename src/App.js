import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;
