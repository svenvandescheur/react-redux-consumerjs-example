import { connect } from 'react-redux';
import { updatePost } from '../actions';
import Post from '../components/Post';


const mapStateToProps = (state) => state;


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (post, data) => {
      dispatch(updatePost(post, data))
    }
  }
}


const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);


export default PostContainer;