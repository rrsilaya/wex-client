import React, { Component } from 'react';

import Grommet from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import AddIcon from 'grommet/components/icons/base/Add';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

import Modal from './Modal/Modal';
import Category from './category/Category';

import './style.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: null
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Grommet centered={false}>
        {this.state.show && <Modal hide={this.hideModal} id={this.state.id} />}
        <div className="wrapper">
          <div className="app">
            <Heading tag={'h1'}>Questions</Heading>
            <Category category="Movies" />
            <br />
            <div className="buttons">
              <Button
                icon={<AddIcon />}
                label="Add Question"
                primary={true}
                onClick={this.showModal}
              />
            </div>
          </div>
        </div>
      </Grommet>
    );
  }
}

export default Dashboard;
