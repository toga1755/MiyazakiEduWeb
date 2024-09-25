// src/components/PostForm.jsx
import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length > 50) {
      setError('タイトルは50文字以内でなければなりません。');
      return;
    }
    setError('');

    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* エラーメッセージ表示 */}
      <input 
        type="text" 
        placeholder="タイトル" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="内容" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <button type="submit">投稿</button>
    </form>
  );
};

export default PostForm;
