import React, { Component } from 'react';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

import AddIcon from 'grommet/components/icons/base/Add';

import Question from '../question/Question';

class Category extends Component {
  render() {
    return (
      <Accordion openMulti={true}>
        <AccordionPanel heading={this.props.category} pad={'medium'}>
          <Question />
          <Question />
        </AccordionPanel>
      </Accordion>
    );
  }
}

export default Category;
