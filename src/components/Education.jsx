import React from 'react';
import { Container, Typography } from '@mui/material';

const Education = () => {
  return (
    <Container id="education" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4" color='#00ADB5' gutterBottom>
        Education
      </Typography>
      <Typography variant="h6" color='primary'>
        Walchand College of Engineering, Sangli (Jul 2020 - May 2024)
      </Typography>
      <Typography variant="body2" color="primary" paragraph>
        - B.Tech in Electronics | CGPA: 8.53/10
      </Typography>
      <Typography variant="h6" color='primary'>
        Private Highschool & Junior College, Kolhapur (Jun 2019 - Apr 2020)
      </Typography>
      <Typography variant="body2" color="primary" paragraph>
        - HSC (Class XII), Percentage: 90.46%
      </Typography>
      <Typography variant="h6" color='primary'>
        Mahaveer English School, India (Jun 2017 - Apr 2018)
      </Typography>
      <Typography variant="body2" color="primary" paragraph>
        - SSC (Class X), Percentage: 93.6%
      </Typography>
    </Container>
  );
};

export default Education;
