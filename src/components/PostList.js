
import React from 'react';
import PostContainer from '../containers/PostContainer';


const PostList = (props) => (
  <section>
    <em>Click to edit posts.</em>

    <ul>
      {props.posts.map(post =>
        <li key={post.id}>
          <PostContainer post={post} />
        </li>
      )}
    </ul>
  </section>
)

export default PostList;