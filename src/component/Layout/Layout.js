import React from 'react';
import Navbar from './Navbar';
import '../../App.css'
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {/* <div className="App" style={{ background: "#282c34", color: "black" }}> */}
            <div className='App'>
                {children}
            </div>
        </>
    )
}

export default Layout;