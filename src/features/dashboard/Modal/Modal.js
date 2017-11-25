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
      selectedMode: 'Multiple Choice'
    };

    this.changeMode = this.changeMode.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeMode(e) {
    this.setState({ selectedMode: e.target.value });
  }

  changeCategory({ value }) {
    this.setState({ selectedCategory: value });
  }

  render() {
    return (
      <Layer closer={true} flush={false} onClose="">
        <Form className="form">
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
              />

              <Paragraph>Select Question Mode</Paragraph>
              <form className="category">
                <input
                  type="radio"
                  name="category"
                  value="Multiple Choice"
                  checked={this.state.selectedMode === 'Multiple Choice'}
                  onChange={this.changeMode}
                />{' '}
                Multiple Choice<br />
                <input
                  type="radio"
                  name="category"
                  value="True or False"
                  checked={this.state.selectedMode === 'True or False'}
                  onChange={this.changeMode}
                />{' '}
                True or False<br />
                <input
                  type="radio"
                  name="category"
                  value="Text Answer"
                  checked={this.state.selectedMode === 'Text Answer'}
                  onChange={this.changeMode}
                />{' '}
                Text Answer<br />
                <input
                  type="radio"
                  name="category"
                  value="Number Answer"
                  checked={this.state.selectedMode === 'Number Answer'}
                  onChange={this.changeMode}
                />{' '}
                Number Answer
              </form>
              <Paragraph>Question</Paragraph>
              <textarea className="question" />

              {this.state.selectedMode === 'Multiple Choice' && (
                <div>
                  <Paragraph>Choices:</Paragraph>
                  <Paragraph>A</Paragraph>
                  <textarea className="choices" />
                  <Paragraph>B</Paragraph>
                  <textarea className="choices" />
                  <Paragraph>C</Paragraph>
                  <textarea className="choices" />
                  <Paragraph>D</Paragraph>
                  <textarea className="choices" />
                </div>
              )}

              <Paragraph>Answer</Paragraph>
              {this.state.selectedMode === 'Number Answer' ? (
                <input type="number" className="choices" />
              ) : (
                <input type="text" className="choices" />
              )}
            </fieldset>
            <t />
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label={this.state.mode === 'Add' ? 'Add' : 'Edit'}
              plain={true}
              type="submit"
              icon={this.state.mode === 'Add' ? <AddIcon /> : <EditIcon />}
              onClick={this.props.hide}
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
