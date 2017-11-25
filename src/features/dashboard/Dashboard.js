import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import AddIcon from 'grommet/components/icons/base/Add';
import EditIcon from 'grommet/components/icons/base/Edit';
import TrashIcon from 'grommet/components/icons/base/Trash';

import Modal from './Modal/Modal';

import './dash.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="margin">
        {this.state.show && <Modal hide={this.hideModal} id={this.state.id} />}
        <Heading tag={'h2'}> Questions </Heading>
        <Accordion openMulti={true}>
          <AccordionPanel heading="Movies" pad={'medium'}>
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="TV Series" pad={'medium'}>
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Anime" pad={'medium'}>
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Memes" pad={'medium'}>
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
            <Box colorIndex="light-2" pad="medium">
              <Heading tag={'h3'}> Difficulty</Heading>
              <div>
                QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
              </div>
              <div>Answer: </div>
              <div className="buttons">
                <Button
                  icon={<EditIcon size={'small'} />}
                  onClick={this.showModal}
                />
                <Button
                  icon={<TrashIcon size={'small'} />}
                  onClick={this.showModal}
                />
              </div>
            </Box>
            <br />
          </AccordionPanel>
        </Accordion>
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
    );
  }
}

export default Dashboard;
