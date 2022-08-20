import React, {useState} from 'react';
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setIsSubmitting(false);
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset disabled={isSubmitting}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control"
                               value={title} onChange={e => setTitle(e.target.value)} placeholder="Input a title"/>
                    </div>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default PostCreate;