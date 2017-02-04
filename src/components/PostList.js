
import React from 'react';
import Post from './Post';

const PostList = (props) => (
  <ul>
    {props.posts.map(post =>
      <Post key={ post.id } post={ post } />
    )}
  </ul>
)

export default PostList;