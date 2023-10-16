import React from 'react'

const Todos = (props) => {
    const todo = props.todo_trans;
    const list = props.title;
    const hanleDeteleEvent = props.hanleDeteleEvent;

    const handleDelete = (id) => {
        hanleDeteleEvent(id)
    }
    // cosnt {todos, title} = props;
    return (
        <div className='todos-container'>
            <div className='title'>
                {list}
            </div>
            {todo.map((item, index) => {
                return (
                    <div key={item.id}>
                        <li className='todo-child'>{item.id} - {item.title}</li>
                        &nbsp;  &nbsp;      <span onClick={() => handleDelete(item.id)}>X</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos