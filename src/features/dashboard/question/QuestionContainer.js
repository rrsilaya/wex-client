import { connect } from 'react-redux';
import Question from './Question';

import { deleteQuestion } from '../duck';

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: id => {
      dispatch(deleteQuestion(id));
    }
  };
};

const QuestionContainer = connect(null, mapDispatchToProps)(Question);
export default QuestionContainer;
