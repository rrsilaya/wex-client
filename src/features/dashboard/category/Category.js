import React, { Component } from 'react';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import QuestionContainer from '../question/QuestionContainer';

class Category extends Component {
  render() {
    return (
      <Accordion openMulti={true}>
        <AccordionPanel heading={this.props.category} pad={'medium'}>
          {this.props.questions.map(question => (
            <QuestionContainer {...question} key={question._id} />
          ))}
        </AccordionPanel>
      </Accordion>
    );
  }
}

export default Category;
