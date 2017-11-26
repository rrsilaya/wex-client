import React, { Component } from 'react';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import Question from '../question/Question';

class Category extends Component {
  render() {
    return (
      <Accordion openMulti={true}>
        <AccordionPanel heading={this.props.category} pad={'medium'}>
          {this.props.questions.map(question => (
            <Question description={question.question} key={question._id} />
          ))}
        </AccordionPanel>
      </Accordion>
    );
  }
}

export default Category;
