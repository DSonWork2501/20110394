import Layout from "../Layout/Layout";
import useFetch from "../../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";
import Countdown from "../Countdown";
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddNewBlog from './AddNewBlog'
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let dataBlogs = useFetch('https://jsonplaceholder.typicode.com/posts').data;
    let isLoading = useFetch('https://jsonplaceholder.typicode.com/posts').isLoading;
    let isError = useFetch('https://jsonplaceholder.typicode.com/posts').isError;

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let newDataBegin = dataBlogs.slice(0, 9);
            setNewData(newDataBegin);
        }
    }, [dataBlogs])


    const handleAddNew = (blog) => {
        setShow(false);
        let data = newData;
        data.unshift(blog);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <Layout>
            <>
                <Button variant="primary" className="my-3" onClick={handleShow}>
                    + Add new blog
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton />
                    <Modal.Body><AddNewBlog handleAddNew={handleAddNew} /></Modal.Body>

                </Modal>
            </>
            <>
                <div className="blogs-container">
                    {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                        return (
                            <div key={item.id} className="single-blog">
                                <div className="title">Title: {item.title}</div>
                                <div className="content">{item.body}</div>
                                <button
                                    style={{ backgroundColor: "white", borderRadius: "3px", order: '1px solid', }}>
                                    <Link style={{ color: "black", textDecoration: 'none' }} to={`/blog/${item.id}`}>View detail</Link>
                                </button>
                                <button onClick={() => { deletePost(item.id) }} style={{ margin: "0 10px", backgroundColor: "white", borderRadius: "3px", order: '1px solid', color: "black" }}>Delete</button>

                            </div>
                        )
                    })}
                    {isLoading === true &&
                        <div >
                            Loading... <Countdown />
                        </div>
                    }
                </div>
            </>
        </Layout>
    )
}

export default Blog;