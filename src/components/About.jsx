import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container id="about" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4" color='#00ADB5' gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color='primary' paragraph>
      Hi, I'm a passionate software developer with a focus on building efficient and scalable web applications. I have completed my degree in Electronics from Walchand College of Engineering, I've honed my skills through various projects and internships.
I enjoy tackling complex challenges. Beyond my technical abilities, I’m a strong believer in continuous learning and teamwork, as demonstrated by my active participation in national-level competitions and events.
When I'm not coding, I enjoy lifting weights, playing cricket, football, and exploring new recipes in the kitchen.
Feel free to explore my portfolio, and don't hesitate to get in touch!
      </Typography>
    </Container>
  );
};

export default About;
