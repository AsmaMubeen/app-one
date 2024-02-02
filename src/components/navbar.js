// import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Navbar() {
    return (
        <header>
            <nav className="Main-nav">
                <img src={logo} alt="logo" className='logo-image'></img>
                <ul className="Nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar;