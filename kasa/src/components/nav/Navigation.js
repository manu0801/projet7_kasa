import React from 'react';
import "../nav/Navigation.css";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    <div className='navigation'>
        <ul className='nav_list'>
            <li>
                <NavLink className="link" to="/">
                    Accueil
                </NavLink>    
            </li>            
            <li>
                <NavLink className="link" to="/about">    
                    à propos
                </NavLink>
            </li>            
        </ul>
    </div>
    );
};

export default Navigation;