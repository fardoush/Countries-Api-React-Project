import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <a href="/home" className="">Home</a>
            <a href="/about" className="">About</a>
            <a href="/contract" className="">Contract</a>
        </div>
    );
};

export default Menu;