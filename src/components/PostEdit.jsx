import React, { useState, useEffect } from 'react';

const PostEdit = ({ post, updatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  // postが変更された場合にタイトルと内容を更新
  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, { title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <button type="submit">更新</button>
    </form>
  );
};

export default PostEdit;
