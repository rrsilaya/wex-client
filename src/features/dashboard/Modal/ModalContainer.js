import { connect } from 'react-redux';
import Modal from './Modal';

import { addQuestion } from '../duck';

const mapDispatchToProps = dispatch => {
  return {
    handleAddQuestion: question => {
      dispatch(addQuestion(question));
    }
  };
};

const ModalContainer = connect(null, mapDispatchToProps)(Modal);
export default ModalContainer;
