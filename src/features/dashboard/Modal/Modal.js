import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
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
          <br />
          <Heading tag={'h2'}>{this.state.mode} Question</Heading>
          <FormFields>
            <Split fixed={false} showOnResponsive="both">
              <FormField label="Category">
                <TextInput placeholder="e.g. TV Series" />
              </FormField>
              <FormField label="Difficulty">
                <Select
                  className="dropdown"
                  placeHolder="None"
                  options={['Easy', 'Medium', 'Hard']}
                  onChange={this.changeCategory}
                />
              </FormField>
            </Split>
            <FormField label="Question Type">
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
                onChange={this.changeCategory}
              />
            </FormField>

            <FormField label="Question">
              <textarea className="question" />
            </FormField>

            <FormField label="Choices">
              <Box className="choice-pad">
                <FormField>
                  <TextInput placeHolder="Choice A" />
                </FormField>
                <FormField>
                  <TextInput placeHolder="Choice B" />
                </FormField>
                <FormField>
                  <TextInput placeHolder="Choice C" />
                </FormField>
                <FormField>
                  <TextInput placeHolder="Choice D" />
                </FormField>
              </Box>
            </FormField>

            <FormField label="Answer">
              <TextInput />
            </FormField>
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label={this.state.mode === 'Add' ? 'Add' : 'Edit'}
              primary
              type="submit"
              icon={this.state.mode === 'Add' ? <AddIcon /> : <EditIcon />}
              onClick={this.props.hide}
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
      </Layer>
    );
  }
}
export default Modal;
