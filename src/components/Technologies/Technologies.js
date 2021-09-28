import React from 'react';
import { DiFirebase, DiReact, DiGithubBadge } from 'react-icons/di';
import { SiMocha } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  return (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web developement world.
      From backend to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with  <br />
            React, Redux Toolkit, Angular, MobX, TypeScript, JavaScript, ES6, Bootstrap, and-design, CSS, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>
            Experience with  <br />
            NodeJS, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>Version Tool</ListTitle>
          <ListParagraph>
            Experience with  <br />
            BitBucket, GitHub, GIT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMocha size="3rem" />
        <ListContainer>
          <ListTitle>Unit Testing</ListTitle>
          <ListParagraph>
            Experience with  <br />
            Mocha, Chai, Sinon, testing library, Jest
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)};

export default Technologies;
