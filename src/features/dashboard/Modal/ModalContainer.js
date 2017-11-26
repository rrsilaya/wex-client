import { connect } from 'react-redux';
import Modal from './Modal';

import { addQuestion } from '../duck';

const mapStateToProps = state => {
  const { isAddingQuestion } = state.dashboard;

  return isAddingQuestion;
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddQuestion: question => {
      dispatch(addQuestion(question));
    }
  };
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;
