import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Select from 'grommet/components/Select';
import AddIcon from 'grommet/components/icons/base/AddCircle';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';
import Spinning from 'grommet/components/icons/Spinning';
import './style.css';

import Loader from '../../session/SmallLoader';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.id === null ? 'Add' : 'Edit',
      selectedType:
        this.props.id === null ? '' : this.formatString(this.props.data.type),
      questionType: this.props.id === null ? '' : this.props.data.type,
      selectedDifficulty:
        this.props.id === null ? '' : this.props.data.difficulty
    };

    this.changeMode = this.changeMode.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  componentDidMount() {
    this.props.handleGetQuestion(this.props.questionId);
  }

  formatString = string => {
    switch (string) {
      case 'multiple_choice':
        return 'Multiple Choice';
      case 'true_false':
        return 'True or False';
      case 'text':
        return 'Text Answer';
      case 'number':
        return 'Number Answer';
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const question = {
      type: this.state.questionType,
      difficulty: this.state.selectedDifficulty,
      category: e.target.category.value,
      question: e.target.question.value,
      answer: e.target.answer.value,
      choices:
        this.state.selectedType === 'Multiple Choice'
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

  handleEdit = e => {
    e.preventDefault();
    const body = {
      type: this.state.questionType,
      difficulty: this.state.selectedDifficulty,
      answer: e.target.answer.value,
      question: e.target.question.value,
      choices:
        this.state.selectedType === 'Multiple Choice'
          ? [
              e.target.choice1.value,
              e.target.choice2.value,
              e.target.choice3.value,
              e.target.choice4.value
            ]
          : []
    };
    console.log(body);
    console.log(this.props);
    e.target.reset();
    this.props.handleEditQuestion(this.props.data._id, body);
    this.props.hide();
  };

  changeMode({ value }) {
    switch (value) {
      case 'Multiple Choice':
        this.setState({ selectedType: value, questionType: 'multiple_choice' });
        break;
      case 'True or False':
        this.setState({ selectedType: value, questionType: 'true_false' });
        break;
      case 'Text Answer':
        this.setState({ selectedType: value, questionType: 'text' });
        break;
      case 'Number Answer':
        this.setState({ selectedType: value, questionType: 'number' });
        break;
      default:
        break;
    }
  }

  changeCategory({ value }) {
    this.setState({ selectedCategory: value });
  }

  changeDifficulty({ value }) {
    this.setState({ selectedDifficulty: value });
  }

  render() {
    return (
      <Layer closer={true} flush={false}>
        {this.props.isGettingQuestion ? (
          <Loader />
        ) : (
          <Form
            className="form"
            onSubmit={
              this.state.mode === 'Add' ? this.handleSubmit : this.handleEdit
            }
          >
            <br />
            <Heading tag={'h2'}>{this.state.mode} Question</Heading>
            <FormFields>
              <Split fixed={false} showOnResponsive="both">
                <FormField label="Category">
                  {this.state.mode === 'Add' ? (
                    <TextInput placeHolder="e.g. TV Series" name="category" />
                  ) : (
                    <TextInput
                      value={this.props.data.category}
                      name="category"
                    />
                  )}
                </FormField>
                <FormField label="Difficulty">
                  <Select
                    className="dropdown"
                    placeHolder="None"
                    options={['Easy', 'Medium', 'Hard']}
                    value={this.state.selectedDifficulty}
                    onChange={this.changeDifficulty}
                    name="difficulty"
                  />
                </FormField>
              </Split>
              <FormField label="Question Type">
                <Select
                  className="dropdown"
                  placeHolder="None"
                  options={[
                    'Multiple Choice',
                    'True or False',
                    'Text Answer',
                    'Number Answer'
                  ]}
                  value={this.state.selectedType}
                  onChange={this.changeMode}
                  name="mode"
                />
              </FormField>

              <FormField label="Question">
                {this.state.mode === 'Add' ? (
                  <textarea className="question" name="question" required />
                ) : (
                  <textarea
                    className="question"
                    name="question"
                    defaultValue={this.props.data.question}
                    disabled
                  />
                )}
              </FormField>

              {this.state.mode === 'Add' ? (
                this.state.selectedType === 'Multiple Choice' ? (
                  <FormField label="Choices">
                    <Box className="choice-pad">
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice A"
                          name="choice1"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice B"
                          name="choice2"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice C"
                          name="choice3"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice D"
                          name="choice4"
                        />
                      </FormField>
                    </Box>
                  </FormField>
                ) : (
                  ''
                )
              ) : this.state.selectedType === 'Multiple Choice' ? (
                this.props.data.type === 'multiple_choice' ? (
                  <FormField label="Choices">
                    <Box className="choice-pad">
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice A"
                          name="choice1"
                          defaultValue={this.props.data.choices[0]}
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice B"
                          name="choice2"
                          defaultValue={this.props.data.choices[1]}
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice C"
                          name="choice3"
                          defaultValue={this.props.data.choices[2]}
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice D"
                          name="choice4"
                          defaultValue={this.props.data.choices[3]}
                        />
                      </FormField>
                    </Box>
                  </FormField>
                ) : (
                  <FormField label="Choices">
                    <Box className="choice-pad">
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice A"
                          name="choice1"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice B"
                          name="choice2"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice C"
                          name="choice3"
                        />
                      </FormField>
                      <FormField>
                        <TextInput
                          className="choice"
                          placeHolder="Choice D"
                          name="choice4"
                        />
                      </FormField>
                    </Box>
                  </FormField>
                )
              ) : (
                ''
              )}

              {this.state.mode === 'Add' ? (
                this.state.selectedType === 'Number Answer' ? (
                  <FormField label="Answer">
                    <NumberInput name="answer" placeholder="Enter answer..." />
                  </FormField>
                ) : (
                  <FormField label="Answer">
                    <TextInput name="answer" placeHolder="Enter answer..." />
                  </FormField>
                )
              ) : this.state.selectedType === 'Number Answer' ? (
                <FormField label="Answer">
                  <NumberInput
                    name="answer"
                    defaultValue={parseInt(this.props.answer, 10)}
                  />
                </FormField>
              ) : (
                <FormField label="Answer">
                  <TextInput
                    name="answer"
                    placeHolder="Enter answer..."
                    defaultValue={this.props.answer}
                  />
                </FormField>
              )}
            </FormFields>

            <Footer pad={{ vertical: 'medium' }}>
              <Button
                label={this.state.mode === 'Add' ? 'Add' : 'Edit'}
                primary
                type="submit"
                icon={this.state.mode === 'Add' ? <AddIcon /> : <EditIcon />}
              />
              <Button
                label="Cancel"
                primary
                type="submit"
                icon={<CloseIcon />}
                onClick={this.props.hide}
              />
            </Footer>
          </Form>
        )}
      </Layer>
    );
  }
}
export default Modal;
