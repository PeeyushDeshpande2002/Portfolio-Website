import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container id="about" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4" color='#00ADB5' gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color='primary' paragraph>
        I am currently pursuing a degree in Electronics at Walchand College of Engineering. I have a strong passion
        for coding and web development. I have worked on several projects using the MERN stack and am always eager to
        learn and implement new technologies.
      </Typography>
    </Container>
  );
};

export default About;
