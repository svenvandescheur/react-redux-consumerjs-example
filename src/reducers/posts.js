const posts = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_POSTS':
      return [];

    case 'SET_POSTS':
      return action.posts

    case 'SET_POST_STATE':
      return state.map((post) => {
        if (post.id === action.post.id) {
          post = action.post;
        }
        return post;
      });

    default:
      return state
  }
}


export default posts