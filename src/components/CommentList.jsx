// src/components/CommentList.jsx
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>コメント</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
