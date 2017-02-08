import { connect } from 'react-redux';
import { addPost } from '../actions';
import Button from '../components/Button';


const mapStateToProps = () => { return {} }


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(addPost())
    }
  }
}


const PostAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);


export default PostAddContainer;