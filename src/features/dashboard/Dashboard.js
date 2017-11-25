import React, { Component } from 'react';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import AddIcon from 'grommet/components/icons/base/Add';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

import './dash.css';
class Dashboard extends Component {
  asd = () => {
    console.log('asd');
  };
  render() {
    return (
      <div className="margin">
        <Heading tag={'h2'}> Questions </Heading>
        <Accordion openMulti={true}>
          <AccordionPanel heading="Movies" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="TV Series" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Anime" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Memes" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <div className="buttons">
              <Button icon={<EditIcon size={'small'} />} onClick={this.asd} />
              <Button icon={<TrashIcon size={'small'} />} onClick={this.asd} />
            </div>
            <br />
          </AccordionPanel>
        </Accordion>
        <br />
        <div className="buttons">
          <Button
            icon={<AddIcon />}
            label="Add Question"
            primary={true}
            onClick={this.asd}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
