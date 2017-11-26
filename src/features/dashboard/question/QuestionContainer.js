import { connect } from 'react-redux';
import Question from './Question';

import { deleteQuestion } from '../duck';

const mapStateToProps = state => {
  const { isDeleting } = state.dashboard;

  return {
    isDeleting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (id, category) => {
      dispatch(deleteQuestion(id, category));
    }
  };
};

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  Question
);
export default QuestionContainer;
