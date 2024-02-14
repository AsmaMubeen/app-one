import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function NavbarOld() {
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

function Navbar(){
    return (
        <header>
            <nav className="Main-nav">
                <img src={logo} alt="logo" className='logo-image'></img>
                <h3 className="title">ReactFacts</h3>
                <h4 className="extra-title">React Course - Project 1</h4>
            </nav>
        </header>

    )
}

export default Navbar;