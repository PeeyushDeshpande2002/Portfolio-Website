import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container id="contact" maxWidth="sm" style={{ padding: '50px 0' }}>
      <Typography variant="h4" color='#00ADB5' gutterBottom >
        Contact Me
      </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: '20px', margin : '20px' }}>
          <span style={{ color: '#EEEEEE' }}>Send a mail</span>
        </Button>

        <Button variant="contained" color="secondary" style={{ marginTop: '20px', margin : '20px'}}>
          <span style={{ color: '#EEEEEE' }}>Connect on LinkedIn</span>
        </Button>
    </Container>
  );
};

export default Contact;
