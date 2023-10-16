import React from 'react'
import { useState, useEffect } from 'react';
import Todos from '../Todos';
import Layout from '../Layout/Layout';
import Selectdropdown from '../Selectdropdown';
import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Secrect from './Secrect';
const Todo = (props) => {
    const [id, setId] = useState(''); // Hook
    const [job, setJob] = useState('');
    const [todo, setTodos] = useState([
        { id: '1', title: 'Study' },
        { id: '2', title: 'Dance' },
        { id: '3', title: 'Walk' },
        { id: '4', title: 'Eat' },
        { id: '5', title: 'Sleep' },
        { id: '6', title: 'Play' },
    ]);
    const [data, setdata] = useState(
        {
            id: 1,
            title: "Passing value from one page to another page",
            description: "Some small example of how to pass the data from one page to another page",
        }
    );
    const [location, setLocation] = useState('');
    const handleDelete = (location) => {
        console.log("Location >>>", location)
        setLocation(location);
    }

    useEffect(() => {
        console.log("data")
    }, [data]);

    const handleClickEvent = (event) => {
        if (!id) {
            alert("Empty input id")
            return;
        }
        else if (!job) {
            alert("Empty input job  ")
            return;
        }
        let todoadd = { id: id, title: job }
        setTodos([...todo, todoadd])
        setId('')
        setJob('')
    }
    const nav = useNavigate();
    const handleNextPageClickEvent = () => {
        nav("/secrect")
    };

    const handleChangeIdEvent = (event) => {
        setId(event.target.value);
    }

    const handleChangeJobEvent = (event) => {
        setJob(event.target.value);
    }

    const hanleDeteleEvent = (id) => {
        let currentodo = todo;
        currentodo = todo.filter(item => item.id !== id);
        setTodos(currentodo);
    }
    return (
        <Layout>
            {/* <Todos
                todo_trans={todo.filter(item => item.title.length >= 5)}
                title="List 2"
                hanleDeteleEvent={hanleDeteleEvent}
            /> */}
            {/* <Selectdropdown /> */}

            <Todos
                todo_trans={todo}
                title="List 1"
                hanleDeteleEvent={hanleDeteleEvent}
            />
            <div>----------------------</div>
            <input style={{ marginBottom: "10px" }} type='text' value={id} onChange={(event) => handleChangeIdEvent(event)} />
            <input type='text' value={job} onChange={(event) => handleChangeJobEvent(event)} />
            <button type="button" onClick={(event) => handleClickEvent(event)}>Add</button>
            {/* <button type="button" onClick={() => handleNextPageClickEvent()}>Page Secrect</button> */}
            {/* <button onClick={() => { nav('/secrect', { replace: true, state: { data: data } }) }}>Go To Secrect Page</button> */}
            <Link to='/secrect' state={{ data: data, location: location }}>
                Secrect Page
            </Link>
            <h1>Location: {location}</h1>
            <Selectdropdown
                onDelete={handleDelete}
            />
        </Layout >
    )
}

export default Todo