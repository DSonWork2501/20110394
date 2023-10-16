import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
// import Banner from "../images/banner.jpeg";
import Banner from "../../images/banner.jpg";

import "../styles/HomeStyles.css"
const Home = () => {
    return (
        <Layout>
            <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="headerContainer">
                    <h1>Simple Blog Website</h1>
                    <Link to="/blog">
                        <button>VIEW BLOG NOW</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
