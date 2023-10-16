import React from 'react'
import Layout from '../Layout/Layout'
import Selectdropdown from '../Selectdropdown';
import { useLocation } from 'react-router-dom';

const Secrect = (props) => {
    const location = useLocation();
    console.log(location, "useLocation Hook")
    const data = location.state?.data;
    const address = location.state?.location;

    return (
        <Layout>
            Secrect page
            <h1> {data ? data.id : "Can't get id"} </h1>
            <h1> {data ? data.title : "Can't get title"} </h1>
            <h1> {data ? data.description : "Can't get description"} </h1>
            <h1> {address ? address : "Can't get location"} </h1>
        </Layout>
    )
}

export default Secrect