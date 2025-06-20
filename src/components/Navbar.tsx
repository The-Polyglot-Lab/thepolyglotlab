import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-container">
                Settings ⚙️
            </div>
        </nav>
    );
}

export default Navbar;