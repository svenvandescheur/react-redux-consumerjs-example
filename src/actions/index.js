import PostConsumer from '../data/post';


let postConsumer = new PostConsumer();


export const setPosts = (posts) => {
  return {
    type: 'SET_POSTS',
    posts: posts,
  }
}


export const fetchPost = (postId) => {
  return function(dispatch) {
    return postConsumer.read(postId)
      .then((post) => dispatch(setPosts([post])) )
  }
}


export const fetchPosts = () => {
  return function(dispatch) {
    return postConsumer.read()
      .then((posts) => dispatch(setPosts(posts)) )
  }
}