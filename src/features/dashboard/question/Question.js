import React, { Component } from 'react';

import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

import ModalContainer from '../Modal/ModalContainer';

class Question extends Component {
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

  handleDelete = () => {
    this.props.handleDelete(this.props._id);
  };

  render() {
    return (
      <Card
        label={this.props.difficulty}
        colorIndex="grey-4-a"
        full={'horizontal'}
        description={
          this.props.question +
          (this.props.type === 'true_false' ? ` True or False?` : '')
        }
        className="card-q"
      >
        {this.state.show && (
          <ModalContainer hide={this.hideModal} id={this.state.id} />
        )}
        {this.props.type === 'multiple_choice' ? (
          <ol className="choices" type="A">
            {this.props.choices.map((choice, i) => <li key={i}>{choice}</li>)}
          </ol>
        ) : (
          ''
        )}
        <div className="buttons">
          <Button icon={<EditIcon />} href="#" onClick={this.showModal} />
          <Button icon={<TrashIcon />} href="#" onClick={this.handleDelete} />
        </div>
      </Card>
    );
  }
}

export default Question;
