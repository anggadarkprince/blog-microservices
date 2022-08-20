import React from 'react';

const CommentList = ({comments}) => {

    const renderedComments = comments.map(comment => {
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