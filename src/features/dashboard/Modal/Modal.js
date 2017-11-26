import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Select from 'grommet/components/Select';
import AddIcon from 'grommet/components/icons/base/AddCircle';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';
import './style.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.id === null ? 'Add' : 'Edit',
      selectedCategory: 'Movies',
      selectedMode: 'multiple_choice',
      selectedDifficulty: 'Easy'
    };

    this.changeMode = this.changeMode.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const question = {
      category: this.state.selectedCategory,
      type: this.state.selectedMode,
      difficulty: this.state.selectedDifficulty,
      question: e.target.question.value,
      answer: e.target.answer.value,
      choices:
        this.state.selectedMode === 'multiple_choice'
          ? [
              e.target.choice1.value,
              e.target.choice2.value,
              e.target.choice3.value,
              e.target.choice4.value
            ]
          : []
    };
    console.log(question);
    e.target.reset();
    this.props.hide();
    this.props.handleAddQuestion(question);
  };

  changeMode(e) {
    this.setState({ selectedMode: e.target.value });
  }

  changeCategory({ value }) {
    this.setState({ selectedCategory: value });
  }

  changeDifficulty({ value }) {
    this.setState({ selectedDifficulty: value });
  }

  render() {
    return (
      <Layer closer={true} flush={false} onClose="">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Header>{this.state.mode} Question</Header>
          <FormFields>
            <fieldset>
              <Paragraph>Select a Category</Paragraph>
              <Select
                className="dropdown"
                placeHolder="None"
                options={[
                  'Movies',
                  'Memes',
                  'TV Series',
                  'Anime',
                  'Last Category'
                ]}
                value={this.state.selectedCategory}
                onChange={this.changeCategory}
                name="category"
              />

              <Paragraph>Select Difficulty</Paragraph>
              <Select
                className="dropdown"
                placeHolder="None"
                options={['Easy', 'Medium', 'Hard']}
                value={this.state.selectedDifficulty}
                onChange={this.changeDifficulty}
                name="difficulty"
              />

              <Paragraph>Select Question Mode</Paragraph>
              <form className="category" name="mode">
                <input
                  type="radio"
                  value="multiple_choice"
                  checked={this.state.selectedMode === 'multiple_choice'}
                  onChange={this.changeMode}
                  required
                />{' '}
                Multiple Choice<br />
                <input
                  type="radio"
                  value="true_false"
                  checked={this.state.selectedMode === 'true_false'}
                  onChange={this.changeMode}
                  required
                />{' '}
                True or False<br />
                <input
                  type="radio"
                  value="text"
                  checked={this.state.selectedMode === 'text'}
                  onChange={this.changeMode}
                  required
                />{' '}
                Text Answer<br />
                <input
                  type="radio"
                  value="number"
                  checked={this.state.selectedMode === 'number'}
                  onChange={this.changeMode}
                  required
                />{' '}
                Number Answer
              </form>
              <Paragraph>Question</Paragraph>
              <textarea className="question" name="question" required />

              {this.state.selectedMode === 'multiple_choice' && (
                <div>
                  <Paragraph>Choices:</Paragraph>
                  <Paragraph>A</Paragraph>
                  <textarea className="choices" name="choice1" required />
                  <Paragraph>B</Paragraph>
                  <textarea className="choices" name="choice2" required />
                  <Paragraph>C</Paragraph>
                  <textarea className="choices" name="choice3" required />
                  <Paragraph>D</Paragraph>
                  <textarea className="choices" name="choice4" required />
                </div>
              )}

              <Paragraph>Answer</Paragraph>
              {this.state.selectedMode === 'number' ? (
                <input
                  type="number"
                  className="choices"
                  name="answer"
                  required
                />
              ) : (
                <input type="text" className="choices" name="answer" required />
              )}
            </fieldset>
            <t />
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label={this.state.mode === 'Add' ? 'Add' : 'Edit'}
              plain={true}
              icon={this.state.mode === 'Add' ? <AddIcon /> : <EditIcon />}
              type="submit"
            />
            <Button
              label="Cancel"
              plain={true}
              type="submit"
              icon={<CloseIcon />}
              onClick={this.props.hide}
            />
          </Footer>
        </Form>
      </Layer>
    );
  }
}
export default Modal;
