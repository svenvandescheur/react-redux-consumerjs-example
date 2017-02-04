
import React from 'react';
import PostContainer from '../containers/PostContainer';


const PostList = (props) => (
  <ul>
    {props.posts.map(post =>
      <li key={ post.id }>
        <PostContainer post={ post } />
      </li>
    )}
  </ul>
)

export default PostList;