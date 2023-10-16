import Layout from "../Layout/Layout";
import useFetch from "../../customize/fetch";
import '../styles/Blog.scss';
import { Link } from "react-router-dom";
import Countdown from "../Countdown";
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddNewBlog from './AddNewBlog'
import EditBlog from "./EditBlog";
const Blog = (props) => {
    // const [todo, setTodos] = useState([
    //     { id: '1', title: 'Study' },
    //     { id: '2', title: 'Dance' },
    //     { id: '3', title: 'Walk' },
    //     { id: '4', title: 'Eat' },
    //     { id: '5', title: 'Sleep' },
    //     { id: '6', title: 'Play' },
    // ]);
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [save, setSave] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit = () => setEdit(true);


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


    // const handleEditNew = (item) => {
    //     setSave(item)
    //     console.log("Check:", item)
    // }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <Layout>
            <Button variant="primary" className=" my-3" onClick={handleShow}>
                + Add new blog
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body><AddNewBlog handleAddNew={handleAddNew} /></Modal.Body>
            </Modal>
            <>
                <div style={{ paddingTop: "10px" }} className="blogs-container">
                    {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                        return (
                            <div key={item.title} className="single-blog">
                                <div className="title">Title: {item.title}</div>
                                {edit === true ?
                                    <input style={{ minHeight: "50px", minWidth: "400px", margin: "20px 0" }} value={item.body}>
                                    </input>
                                    :
                                    <>
                                        { }
                                        <div className="content">{item.body}</div>
                                    </>
                                }
                                <div >
                                    <button
                                        style={{ minHeight: "30px", minWidth: "80px", backgroundColor: "white", borderRadius: "3px", order: '1px solid', }}>
                                        <Link style={{ color: "black", textDecoration: 'none' }} to={`/blog/${item.id}`}>View detail</Link>
                                    </button>
                                    <button onClick={() => setEdit((prev) => !prev)}
                                        style={{ minHeight: "30px", minWidth: "80px", marginLeft: "10px", backgroundColor: "white", borderRadius: "3px", order: '1px solid', color: "black" }}>Edit</button>
                                    <button onClick={() => { deletePost(item.id) }} style={{ minHeight: "30px", minWidth: "80px", marginLeft: "10px", backgroundColor: "white", borderRadius: "3px", order: '1px solid', color: "black" }}>Delete</button>
                                </div>

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
        </Layout >
    )
}

export default Blog;