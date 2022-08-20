import React, {useEffect, useState} from 'react';
import axios from "axios";

const CommentList = ({postId}) => {
    const [comments, setComments] = useState({});

    const fetchComments = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response.data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComments = Object.values(comments).map(comment => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        );
    });

    return (
        <>
            <h6>Comments:</h6>
            {
                renderedComments.length
                    ? <ul>{renderedComments}</ul>
                    : <p className="text-muted">No comment available</p>
            }
        </>
    )
}

export default CommentList;