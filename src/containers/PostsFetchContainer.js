import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Button from '../components/Button';


const mapStateToProps = () => { return {} }


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(fetchPosts())
    }
  }
}


const PostsFetchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);


export default PostsFetchContainer;