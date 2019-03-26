import React from 'react';

const NavComponent = () => {
    return(
        <nav className="nav-bar">
           <ul className="nav-list">
               <li className="nav-link">
                   Home
                </li>
               <li className="nav-link">
                   About
                </li>
               <li className="nav-link">
                   Portofolio
                </li>
               <li className="nav-link">
                   Resume
                </li>
               <li className="nav-link">
                   Contact
                </li>
           </ul>
        </nav>
    );  
}

export default NavComponent;