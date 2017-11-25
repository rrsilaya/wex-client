import React, { Component } from 'react';

import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Heading from 'grommet/components/Heading';

import AddIcon from 'grommet/components/icons/base/Add';

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
          <AccordionPanel heading="TV Series" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Memes" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Movies" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Anime" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
          </AccordionPanel>
          <AccordionPanel heading="Category" pad={'medium'}>
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
            <Heading tag={'h3'}> Difficulty</Heading>
            <div>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestionQuestion?
            </div>
            <div>Answer: </div>
            <br />
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}

export default Dashboard;
