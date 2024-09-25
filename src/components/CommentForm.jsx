import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
  const [content, setContent] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { content, user });
    setContent('');
    setUser('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="あなたの名前"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <textarea
        placeholder="コメントを入力"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">コメントを投稿</button>
    </form>
  );
};

export default CommentForm;
