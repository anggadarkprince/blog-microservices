import React, {useState} from 'react';
import axios from "axios";

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setIsSubmitting(false);
        setContent('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <fieldset disabled={isSubmitting}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="content">New Comment</label>
                        <input type="text" id="content" className="form-control"
                               value={content} onChange={e => setContent(e.target.value)} placeholder="Type a comment"/>
                    </div>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default CommentCreate;