import React from 'react';
import { Container, Typography } from '@mui/material';

const Experience = () => {
  return (
    <Container id="experience" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4" gutterBottom color='#00ADB5'>
        Experience
      </Typography>
      <Typography variant="h6" color='primary'>
        Software Developer Intern at Werbung Advertisers (Jan 2024 - Jun 2024)
      </Typography>
      <Typography variant="body2" color="primary" paragraph>
        - Developed a comprehensive web application using the MERN stack, improving efficiency by 30%.
        <br />
        - Designed and implemented admin features such as user management, video progress tracking, and content uploads, resulting in a 40% increase in administrative efficiency.
        <br />
        - Built a community feed and chat system, enhancing user interaction and increasing active user time by 20%.
      </Typography>
    </Container>
  );
};

export default Experience;
