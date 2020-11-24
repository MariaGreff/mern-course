import React, { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
            <span className="brand-logo">Shorten your link</span>
            <ul id="nav-mobile" classNme="right hide-on-med-and-down">
                <li><NavLink to="/create"></NavLink>Create</li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Log out</a></li>
            </ul>
            </div>
        </nav>
    );
};