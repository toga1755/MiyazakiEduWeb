// src/components/PostDetail.jsx
import React from 'react';
import CommentForm from './CommentForm'; // コメント追加のフォーム
import CommentList from './CommentList'; // コメントリスト

const PostDetail = ({ post, addComment }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentForm postId={post.id} addComment={addComment} />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostDetail;
