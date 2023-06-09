import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <div className='navButton'>
                    <FontAwesomeIcon icon="user" color="white" size="2x"/>
                    <p>À propos</p>
                </div>
            </Link>
            <Link to="/portfolio">
                <div className='navButton'>
                    <FontAwesomeIcon icon="file-code" color="white" size="2x"/>
                    <p>Portfolio</p>
                </div>
            </Link>
            <Link to='/contact'>
                <div className='navButton'>
                    <FontAwesomeIcon icon="envelope" color="white" size="2x"/>
                    <p>Contact</p>
                </div>
            </Link>
        </nav>
    );
};

export default NavBar;