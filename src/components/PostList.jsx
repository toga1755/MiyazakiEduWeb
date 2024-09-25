import React from 'react';
import CommentList from './CommentList'; // コメントリストをインポート

const PostList = ({ posts, deletePost, updatePost, setEditingPost }) => {
  return (
    <div>
      <h2>掲示板の投稿一覧</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => setEditingPost(post.id)}>編集</button>
            <button onClick={() => deletePost(post.id)}>削除</button>
            <CommentList comments={post.comments} /> {/* コメントリストを表示 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
