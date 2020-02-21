import React from 'react';

class NavComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
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
}

export default NavComponent;