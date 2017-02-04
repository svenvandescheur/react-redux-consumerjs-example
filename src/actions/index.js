import PostConsumer from '../data/post';


let postConsumer = new PostConsumer();


export const clearPosts = () => {
  return {
    type: 'CLEAR_POSTS',
  }
}


export const setPosts = (posts) => {
  return {
    type: 'SET_POSTS',
    posts: posts,
  }
}


export const setPostState = (post) => {
  return {
    type: 'SET_POST_STATE',
    post: post,
  }
}


export const fetchPost = (postId) => {
  return function(dispatch) {
    return postConsumer.read(postId)
      .then((posts) => {
        dispatch(clearPosts());
        dispatch(setPosts([posts]));
      });
  }
}


export const fetchPosts = () => {
  return function(dispatch) {
    return postConsumer.read()
      .then((posts) => {
        dispatch(clearPosts());
        dispatch(setPosts(posts));
      });
  }
}


export const updatePost = (post, data) => {
  post.title = data.title;
  post.body = data.body;

  return function(dispatch) {
    return post.update()
      .then((post) => dispatch(setPostState(post)) )
  }
}