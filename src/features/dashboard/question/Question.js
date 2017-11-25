import React, { Component } from 'react';

import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

class Question extends Component {
  render() {
    return (
      <Card
        label="Easy"
        colorIndex="grey-4-a"
        full={'horizontal'}
        description="This is a fucking description"
        className="card-q"
      >
        <div className="buttons">
          <Button icon={<EditIcon />} href="#" />
          <Button icon={<TrashIcon />} href="#" />
        </div>
      </Card>
    );
  }
}

export default Question;
