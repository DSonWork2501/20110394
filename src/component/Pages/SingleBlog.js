import React from 'react'
import Layout from '../Layout/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../customize/fetch';
const SingleBlog = () => {
    let { id } = useParams();

    let dataBlogsDetail = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`).data;
    let isLoading = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`).isLoading;
    let isError = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`).isError;

    let nav = useNavigate();
    const handleBackData = () => {
        nav('/blog');
    }

    return (
        <>
            <Layout>
                <div>
                    <span onClick={handleBackData}>
                        &lt;= Back
                    </span>
                </div>
                <div className='blog-detail'>
                    {dataBlogsDetail &&
                        <>
                            <div className='title'>
                                Blog ID: {id} --- {isLoading === true ? "Loading data ..." : dataBlogsDetail.title}
                            </div>
                            <div className='content'>
                                {dataBlogsDetail.body}
                            </div>
                        </>
                    }
                </div>
            </Layout>
        </>
    )
}

export default SingleBlog