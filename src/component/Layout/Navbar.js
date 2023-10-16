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
            <li><Link to="/timer">Timer Apps</Link></li>
            <li className="dropdown">
                {/* <li className='dropbtn'>Dropdown</li> */}
                <a href="/" style={{ cursor: 'pointer' }} className="dropbtn">Dropdown</a>
                <div className="dropdown-content">
                    <Link to="/todolist">Todo Apps</Link>
                    <Link to="/secrect" state={{ data: data }}>Secret</Link>
                </div>
            </li>
        </ul>
    );
}
export default Navbar;