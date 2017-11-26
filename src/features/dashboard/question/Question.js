import React, { Component } from 'react';

import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';
import Toast from 'grommet/components/Toast';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

class Question extends Component {
  handleDelete = () => {
    this.props.handleDelete(this.props._id, this.props.category);
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
        {this.props.type === 'multiple_choice' ? (
          <ol className="choices" type="A">
            {this.props.choices.map((choice, i) => <li key={i}>{choice}</li>)}
          </ol>
        ) : (
          ''
        )}
        {this.props.isDeleting ? (
          <Toast status="critical">Deleting question</Toast>
        ) : (
          ''
        )}
        <div className="buttons">
          <Button icon={<EditIcon />} href="#" />
          <Button icon={<TrashIcon />} onClick={this.handleDelete} />
        </div>
      </Card>
    );
  }
}

export default Question;
