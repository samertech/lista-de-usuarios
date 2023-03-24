import React from 'react'
import { Link } from "react-router-dom";

const NavBar= () => {

    return (
       <nav>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='details'>Details</Link>
        </nav>
    );
};

export default NavBar;