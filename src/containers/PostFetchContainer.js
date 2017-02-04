import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import PostFetch from '../components/PostFetch';


const mapStateToProps = () => { return {} }


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (postId) => {
      dispatch(fetchPost(postId))
    }
  }
}


const PostFetchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostFetch);


export default PostFetchContainer;