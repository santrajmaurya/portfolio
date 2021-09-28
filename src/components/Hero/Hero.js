import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Innovative Front End Developer with more than 7+ years experience building and maintaining 
      responsive Applications in the E-commerce, Banking and Telecom industry. 
      Proficient in ReactJS, Redux Toolkit, MobX, JavaScript, TypeScript, HTML, CSS, Bootstrap; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of application deployment.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/santraj-kumar-67b43611b/', '_blank')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;