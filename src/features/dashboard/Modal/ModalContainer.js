import { connect } from 'react-redux';
import Modal from './Modal';

import { addQuestion, getQuestion, editQuestion } from '../duck';

const mapStateToProps = state => {
  const { answer, isGettingQuestion } = state.dashboard;

  return { answer, isGettingQuestion };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddQuestion: question => {
      dispatch(addQuestion(question));
    },
    handleGetQuestion: id => {
      dispatch(getQuestion(id));
    },
    handleEditQuestion: (id, update) => {
      dispatch(editQuestion(id, update));
    }
  };
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;
