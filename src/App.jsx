import React, { useEffect, useState } from 'react';

function App() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/posts');
        const data = await response.json();
        setPosts(data);
    };

    const handleCreatePost = async () => {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: newPost }),
        });
        if (response.ok) {
            setNewPost('');
            fetchPosts();
        }
    };

    const handleDeletePost = async (id) => {
        await fetch(`http://localhost:5000/posts/${id}`, { method: 'DELETE' });
        fetchPosts();
    };

    return (
        <div>
            <h1>宮崎電子掲示板</h1>
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="新しい投稿を入力"
            />
            <button onClick={handleCreatePost}>投稿</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.content} 
                        <button onClick={() => handleDeletePost(post.id)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
