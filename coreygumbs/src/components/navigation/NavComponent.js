import React from 'react';

const NavComponent = () => {
    return(
        <nav className="nav-bar">
           <ul>
               <li>
                   <a href="#">Home</a>
                </li>
               <li>
                   <a href="#">About</a>
                </li>
               <li>
                   <a href="#">Portfolio</a>
                </li>
               <li>
                   <a href="#">Resume</a>
                </li>
               <li>
                   <a href="#">Contact</a>
                </li>
           </ul>
        </nav>
    );  
}

export default NavComponent;