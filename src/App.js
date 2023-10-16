import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './component/Layout/Navbar';
import Todos from './component/Todos';
import Covid from './component/Pages/Covid';
import Countdown from './component/Countdown';
import { Outlet } from 'react-router-dom';

const App = () => {
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

  useEffect(() => {
    console.log("Update id ")
  }, [id]);
  useEffect(() => {
    console.log("Update job")
  }, [job]);


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
  const onTimesup = () => {
    // alert('times up')
  }


  return (
    <div >
      <div className="app-content">
        <Outlet />
        {/* <Countdown onTimesup={onTimesup} /> */}
      </div>
    </div >
  );
}

export default App;
{/* <Todos
          todo_trans={todo}
          title="List 1"
          hanleDeteleEvent={hanleDeteleEvent}
        />
        <Todos
          todo_trans={todo.filter(item => item.title.length >= 5)}
          title="List 2"
          hanleDeteleEvent={hanleDeteleEvent}
        />
        <input type='text' value={id} onChange={(event) => handleChangeIdEvent(event)} />
        <input type='text' value={job} onChange={(event) => handleChangeJobEvent(event)} />
        <button type="button" onClick={(event) => handleClickEvent(event)}>Add</button> */}