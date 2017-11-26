import React, { Component } from 'react';

import Grommet from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import AddIcon from 'grommet/components/icons/base/Add';

import ModalContainer from './Modal/ModalContainer';
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

  componentDidMount() {
    this.props.handleGetCategories();
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
        {this.state.show && (
          <ModalContainer hide={this.hideModal} id={this.state.id} />
        )}
        <div className="wrapper">
          <div className="app">
            <Heading tag={'h1'}>Questions</Heading>
            {this.props.categories.map((category, i) => (
              <Category
                category={category.category}
                key={i}
                questions={category.questions}
              />
            ))}
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
