import '../styles/Nav.scss'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
    const [data, setData] = useState({
        id: "1",
        title: "How to pass state in react-router-dom",
        description: "Some random text just to test out the result when pass data from one page to another page"
    });
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog Apps</Link></li>
        </ul>
    );
}
export default Navbar;