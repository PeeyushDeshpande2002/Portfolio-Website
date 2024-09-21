import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth="md" style={{ padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2" color="primary">
        &copy; {new Date().getFullYear()} Peeyush Prasanna Deshpande. All Rights Reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
