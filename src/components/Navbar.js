import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar=()=>{
    return <nav className="nav">
        <Link  to="/" className="site-title">Site Name</Link>
        <ul>
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/menu">Menu</Link></li>
            <li><Link  to="/cart">Cart</Link></li>
        </ul>
        </nav>;
}

export default Navbar;

