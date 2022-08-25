import React from 'react';

const CommentList = ({comments}) => {

    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return (
            <li key={comment.id}>
                {content}
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