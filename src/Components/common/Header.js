import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
    const activeStyle = {color: "#9B2335"}
    return <nav>
        <NavLink activeStyle={activeStyle} exact to='/'>Home</NavLink> | <NavLink activeStyle={activeStyle} to='/courses'>Courses</NavLink> | <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
    </nav>
}

export default Header;