import React from 'react'
import Countdown from '../Countdown'
import Layout from '../Layout/Layout'
import '../styles/Nav.scss'
const News = () => {
    // const onTimesup = () => {
    //     // alert('times up')
    // }
    return (
        <Layout>
            <div>
                <h3>News Page </h3>
                <Countdown />
            </div>
        </Layout>
    )
}

export default News