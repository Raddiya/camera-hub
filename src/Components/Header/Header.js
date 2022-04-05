import React from 'react';
import './Header.css';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <h1 className='web-name'>Camera hub bd</h1>
                <CoustomLink to="/">Home</CoustomLink>
                <CoustomLink to="/dashboard">Dashboard</CoustomLink>
                <CoustomLink to="/review">Review</CoustomLink>
                <CoustomLink to="/blog">Blog</CoustomLink>
                <CoustomLink to="/about">About</CoustomLink>
            </nav>
        </div>

    );
};

export default Header;