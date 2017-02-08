import { connect } from 'react-redux';
import { deletePost, updatePost } from '../actions';
import Post from '../components/Post';


const mapStateToProps = (state) => state;


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (post, data) => {
      dispatch(updatePost(post, data));
    },

    onDelete: (post) => {
      dispatch(deletePost(post));
    }
  }
}


const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);


export default PostContainer;