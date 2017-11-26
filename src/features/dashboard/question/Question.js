import React, { Component } from 'react';

import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

class Question extends Component {
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
        <div className="buttons">
          <Button icon={<EditIcon />} href="#" />
          <Button icon={<TrashIcon />} href="#" />
        </div>
      </Card>
    );
  }
}

export default Question;
