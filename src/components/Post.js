import React from 'react';


const Post = (props) => (
    <article>
        <h1>{ props.post.title }</h1>
        <p>{ props.post.body }</p>
    </article>
);


export default Post;