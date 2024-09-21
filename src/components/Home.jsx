import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';

const Home = () => {
  return (
    <Container
      id="home"
      maxWidth="md"
      sx={{
        padding: '150px 0',
        textAlign: 'center',
        backgroundImage: './image.png', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        color: 'white', // Change text color for better contrast if needed
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          Hi, I'm <span style={{ color: '#00ADB5' }}>Peeyush Deshpande</span>
        </Typography>
        <Typography variant="h5" paragraph>
          <Typed
            strings={[
              'Full Stack Developer',
              'MERN Stack Enthusiast',
              'Passionate Coder',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#projects"
          sx={{ marginTop: '30px', color: '#00ADB5' }} // Use sx for consistent styling
        >
          View My Work
        </Button>
      </motion.div>
    </Container>
  );
};

export default Home;
