const posts = (state = [], action) => {
  switch (action.type) {
    case 'CLEAR_POSTS':
      return [];

    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.post.id);

    case 'SET_POSTS':
      return action.posts

    case 'SET_POST_STATE':
      let result = state.map((post) => {
        if (post.id === action.post.id) {
          return action.post;
        }
        return post;
      });
      return result;

    default:
      return state
  }
}


export default posts