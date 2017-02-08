import PostConsumer from '../data/post';
import { dataError } from '../lib/error';


let postConsumer = new PostConsumer();


export const clearPosts = () => {
  return {
    type: 'CLEAR_POSTS',
  }
}


export const removePost = (post) => {
  return {
    type: 'REMOVE_POST',
    post: post,
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


export const addPost = () => {
  return function(dispatch) {
    return postConsumer.create()
      .then((post) => dispatch(setPosts([post])))
      .catch(dataError);
    }
}


export const deletePost = (post) => {
  return function(dispatch) {
    return post.delete()
      .then(() => dispatch(removePost(post)))
      .catch(dataError);
    }
}


export const fetchPost = (postId) => {
  return function(dispatch) {
    return postConsumer.read(postId)
      .then((post) => dispatch(setPosts([post])))
      .catch(dataError);
  }
}


export const fetchPosts = () => {
  return function(dispatch) {
    return postConsumer.read()
      .then((posts) => dispatch(setPosts(posts)))
      .catch(dataError);
  }
}


export const updatePost = (post, data) => {
  post.title = data.title;
  post.body = data.body;

  return function(dispatch) {
    return post.update()
      .then((post) => dispatch(setPostState(post)))
      .catch(dataError);
  }
}
