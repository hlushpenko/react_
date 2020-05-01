import React from 'react';
import s from './NavBar.module.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const NavBar = (props) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Item><Nav.Link as={Link} to='/dialogs'> Dialogs</Nav.Link></Nav.Item>

                <Nav.Item className={s.loginBlock}>
                    {props.isAuth ? <Nav.Link as={Link} to={'/profile/' + props.id}>You profile</Nav.Link>
                        : <Nav.Link as={Link} to={'/login/'}>Login</Nav.Link>}
                </Nav.Item>

                <Nav.Item><Nav.Link as={Link} to="/users"> Users</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/music"> Music</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/settings"> Settings</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;