import '../styles/Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const EditBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmitBtn = async () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
        }

    }
    return (
        <div className='App'>
            <div className="add-new-container">
                <div className="text-add-new">---Edit blog ---</div>
                <div className="inputs-data">
                    <label>Title: </label>
                    <input type="text"
                        value={props.title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="inputs-data">
                    <label>Content: </label>
                    <input type="text"
                        value={props.body}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
            </div>
        </div>

    )
}

export default EditBlog;