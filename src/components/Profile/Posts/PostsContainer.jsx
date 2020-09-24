import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => {

  console.log(state);

  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (message) => {
      dispatch(addPostActionCreator(message));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;