import PostConsumer from '../data/post';


let postConsumer = new PostConsumer();


export const setPosts = (posts) => {
  return {
    type: 'SET_POSTS',
    posts: posts,
  }
}


export const fetchPosts = () => {
  return function(dispatch) {
    return postConsumer.read()
      .then((posts) => dispatch(setPosts(posts)) )
  }
}