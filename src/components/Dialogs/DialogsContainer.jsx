import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../redux/dialogsReducer';

const mapStateToProps = (state) => {
  return ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    } 
  })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;